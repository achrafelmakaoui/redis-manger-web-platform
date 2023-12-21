from flask import jsonify

class Keys:
    def __init__(self) -> None:
        pass

    
    @staticmethod
    def set_key_value(redis_conn, key, value):

        try:
                 
            responce = redis_conn.connection.set(key, value)
            
            if responce :

                responce = jsonify({'message': "success"})
            else:
                responce = jsonify({'error': "failed"})

        except Exception as e:
            
            responce = jsonify({"error": str(e)})

        return responce



    @staticmethod
    def delete_key_value(redis_conn, key):

        try:
            responce = (redis_conn.connection.delete(key))

            if responce :

                responce = jsonify({'message': "success"})
            else:
                responce = jsonify({'error': "failed"})

        except Exception as e:
            responce = jsonify({"error": str(e)})

        return responce

    
    @staticmethod
    def get_key_value(redis_conn, key):

        try:
            responce = (redis_conn.connection.get(key))

            if responce :

                if isinstance(responce, bytes):
                    responce = responce.decode('utf-8')

                responce = jsonify({"key":key, "value":str(responce)})
            
            else:
                responce = jsonify({'error': "failed"})

        except Exception as e:
            
            responce = jsonify({"error": str(e)})

        return responce