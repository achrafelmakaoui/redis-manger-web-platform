import json
from flask import jsonify


class Command:
    def __init__(self) -> None:
        pass

    @staticmethod
    def exec_command(redis_conn, command):
        try:
            response = redis_conn.connection.execute_command(command)

            if isinstance(response, bytes):
                response = (response.decode('utf-8'))
                
            response = jsonify({'response': str(response)})

        except Exception as e:
                response = jsonify({"error": str(e)})

        return response