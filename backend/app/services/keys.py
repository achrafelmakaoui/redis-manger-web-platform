from flask import jsonify

class Keys:
    def __init__(self) -> None:
        pass

    
    @staticmethod
    def set_key_value(redis_conn, key, value, app=None):

        try:
                 
            responce = redis_conn.connection.set(key, value)
            
            if responce :

                responce = jsonify({'message': "success"})
                connection_info = redis_conn.connection.get_connection_kwargs()

                if app != None:
                    app.logger.info(f'{connection_info["client_name"]} - set {key} {value}')
            else:
                responce = jsonify({'error': "failed"})

        except Exception as e:
            
            responce = jsonify({"error": str(e)})

        return responce



    @staticmethod
    def delete_key_value(redis_conn, key, app=None):

        try:
            responce = (redis_conn.connection.delete(key))

            if responce :

                responce = jsonify({'message': "success"})
                connection_info = redis_conn.connection.get_connection_kwargs()

                if app != None:
                    app.logger.info(f'{connection_info["client_name"]} - delete {key}')
            else:
                responce = jsonify({'error': "failed"})

        except Exception as e:
            responce = jsonify({"error": str(e)})

        return responce

    
    @staticmethod
    def get_key_value(redis_conn, key, app=None):

        try:
            responce = (redis_conn.connection.get(key))
            print(responce)
            if responce :

                if isinstance(responce, bytes):
                    responce = responce.decode('utf-8')

                responce = jsonify({"key":key, "value":str(responce)})
                connection_info = redis_conn.connection.get_connection_kwargs()
                if app != None:
                    app.logger.info(f'{connection_info["client_name"]} - get {key}')

            else:
                responce = jsonify({'error': "failed"})

        except Exception as e:
            
            responce = jsonify({"error": str(e)})

        return responce