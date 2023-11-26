
from flask import jsonify, request
from app import create_app
from app.services.connection import Conn
from app.services.command import Command
from app.services.keys import Keys

app, redis_connections, redis_conn = create_app()


# CONNECTIONS

@app.route('/connect', methods=['POST'])
def connect():

    creds = request.get_json()
    global redis_conn, redis_connections

    if not redis_conn:
        redis_conn = Conn()
    print(redis_connections)
    responce = redis_conn.connect(creds, redis_connections)
    # try:
    if isinstance(responce, dict) and responce["conn_info"]:
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
        return Conn.get_connections()

    if request.method == 'DELETE':
        data = request.get_json()
        responce = Conn.del_connection(data)

        redis_connections = Conn.get_connections()
        return responce

    if request.method == 'PUT':

        data = request.get_json()

        client_to_update = data["client_name"]
        client_new_info = data["new_client"]

        responce = Conn.update_connection(
            client_to_update, client_new_info, redis_connections, redis_conn)
        redis_connections = Conn.get_connections()
        return responce

# COMMANDS


@app.route('/command', methods=['POST'])
def exec_command():
    global redis_conn
    if redis_conn:
        if redis_conn.connection:
            data = request.get_json()
            command = data["command"]
            return Command.exec_command(redis_conn, command)

    return jsonify({"error": "connection not established!"})


# Keys

@app.route('/keys', methods=['POST', 'PUT', 'DELETE', 'GET'])
def keys():
    global redis_conn
    data = request.get_json()
    if redis_conn:
        if redis_conn.connection:
            if request.method == ("POST" or "PUT"):

                key, value = data["key"], data["value"]

                return Keys.set_key_value(redis_conn, key, value)

            elif request.method == "DELETE":

                key = data["key"]

                return Keys.delete_key_value(redis_conn, key)

            elif request.method == "GET":

                key = data["key"]

                return Keys.get_key_value(redis_conn, key)

    return jsonify({"error": "connection not established!"})


if __name__ == "__main__":
    app.run(debug=True)
