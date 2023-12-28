
from collections import deque
from flask import jsonify, request
from app.services import connection
from app.services.command import Command
from app.services.monitoring import Monitor

from app.services.keys import Keys
from flask import Flask, jsonify
from flask_cors import CORS
import logging



app = Flask(__name__)
app.logger.setLevel(logging.INFO)  
handler = logging.FileHandler('app.log') 
formatter = logging.Formatter('%(asctime)s - %(message)s')
handler.setFormatter(formatter)
app.logger.addHandler(handler)

CORS(app)


# app.secret_key = "Njzk^9s7X$!D8b2p&5*f^@Gv3v6zT#pA"
redis_conn = connection.Conn()
redis_connections = connection.Conn.get_connections()


# CONNECTIONS

@app.route('/connect', methods=['POST'])
def connect():

    creds = request.get_json()
    global redis_conn, redis_connections

    if not redis_conn:
        redis_conn = connection.Conn()
    responce = redis_conn.connect(creds, redis_connections, app)
    info = redis_conn.connection.info('clients')
 
    if isinstance(responce, dict) and responce["conn_info"]:
        redis_connections = redis_conn.get_connections()
        responce = jsonify(responce)
    redis_connections = connection.Conn.get_connections()

    return responce

@app.route('/change_db', methods=['POST'])
def  use_other_db():
    
    global redis_conn, redis_connections
    creds = request.get_json() 
    return jsonify(redis_conn.use_other_db(creds['db'], app))
    
    

@app.route('/disconnect', methods=['POST'])
def disconnect():
    global redis_conn
    if redis_conn:
        return redis_conn.disconnect()


@app.route('/connections', methods=['GET', 'DELETE', 'PUT'])
def connections():
    global redis_connections, redis_conn
    if request.method == 'GET':
        return connection.Conn.get_connections()

    if request.method == 'DELETE':
        data = request.get_json()
        responce = connection.Conn.del_connection(data)

        redis_connections = connection.Conn.get_connections()
        return responce

    if request.method == 'PUT':

        data = request.get_json()

        client_to_update = data["client_name"]
        client_new_info = data["new_client"]

        responce = connection.Conn.update_connection(
            client_to_update, client_new_info, redis_connections, redis_conn)
        redis_connections = connection.Conn.get_connections()
        return responce

# COMMANDS


@app.route('/command', methods=['POST'])
def exec_command():
    global redis_conn
    if redis_conn:
        if redis_conn.connection:
            data = request.get_json()
            command = data["command"]
            responce = (Command.exec_command(redis_conn, command,app))
            print(responce)
            return (responce)
    return jsonify({"error": "connection not established!"})




@app.route('/key_value/<key>', methods=['GET'])
def key_value(key):
    if request.method == "GET":

        return Keys.get_key_value(redis_conn, key,app)

# Keys
@app.route('/key_value/<key>', methods=['GET'])
def key_value(key):
    if request.method == "GET":

        return Keys.get_key_value(redis_conn, key)
    
@app.route('/keys', methods=['POST', 'PUT', 'DELETE', 'GET'])
def keys():
    global redis_conn
    data = request.get_json()
    print(data)
    if redis_conn:
        if redis_conn.connection:
            if request.method == ("POST" or "PUT"):

                key, value = data["key"], data["value"]

                return Keys.set_key_value(redis_conn, key, value, app)

            elif request.method == "DELETE":

                key = data["key"]

                return Keys.delete_key_value(redis_conn, key,app)


    return jsonify({"error": "connection not established!"})



@app.route('/logs', methods=['GET'])
def logs():
    if request.method == "GET":
        n=20
        filename = "app.log"
        with open(filename, 'r', encoding='utf-8') as file:

            last_lines = deque(file, maxlen=n)
            last_lines_stripped = [line.strip() for line in last_lines]
    
        return list(last_lines_stripped)
    
@app.route('/monitor', methods=['GET'])
def monitor():
    global redis_conn
    if redis_conn:
        if redis_conn.connection:
            if request.method == "GET":
                return Monitor.get_stats(redis_conn)

    
        return jsonify({"error": "connection not established!"})
    

@app.route('/dbs_stats', methods=['GET'])
def dbs_stats():
    global redis_conn
    if redis_conn:
        if redis_conn.connection:
            if request.method == "GET":
                return Monitor.get_dbs_stats(redis_conn)
    
        return jsonify({"error": "connection not established!"})
    


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True,threaded=True)
