import json
from flask import jsonify


class Command:
    def __init__(self) -> None:
        pass

    @staticmethod
    def exec_command(redis_conn, command, app=None):
        try:
            response = redis_conn.connection.execute_command(command)

            if isinstance(response, bytes):
                response = (response.decode('utf-8'))
                
            response = jsonify({'result': str(response)})
            connection_info = redis_conn.connection.get_connection_kwargs()

            if app != None:
                app.logger.info(f'commande- {connection_info["client_name"]} - {command}')

        except Exception as e:
                response = jsonify({"error": str(e)})

        return response