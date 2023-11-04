import json
import redis
from flask import jsonify, request
from app import create_app
from app.services.connection import Conn

app, redis_connections, redis_conn  = create_app()



# CONNECTIONS

@app.route('/connect', methods=['POST'])
def connect():

    creds = request.get_json()
    global redis_conn, redis_connections
    
    if not redis_conn:
        redis_conn = Conn()
    print(redis_connections)
    responce =  redis_conn.connect(creds, redis_connections)
    # try:
    if isinstance(responce, dict) and  responce["conn_info"]:
        redis_connections = redis_conn.get_connections()        
        responce = jsonify(responce)
    redis_connections = Conn.get_connections()

    return responce


@app.route('/disconnect', methods=['POST'])
def disconnect():
    global redis_conn
    if redis_conn:
        return redis_conn.disconnect()
    

@app.route('/connections', methods=['GET', 'DELETE', 'PUT'])
def connections():
    global redis_connections, redis_conn
    if request.method == 'GET':
        return  Conn.get_connections()
    
    if request.method == 'DELETE':
        data = request.get_json()
        responce =  Conn.del_connection(data)

        redis_connections = Conn.get_connections()
        return responce


    if request.method == 'PUT':
        
        data =  request.get_json()

        client_to_update = data["client_name"]
        client_new_info = data["new_client"]

        responce =  Conn.update_connection(client_to_update, client_new_info, redis_connections,redis_conn)
        redis_connections = Conn.get_connections()
        return responce

# COMMANDS

@app.route('/command', methods=['POST'])
def exec_command():
    pass



if __name__ == "__main__":
    app.run(debug=True)
