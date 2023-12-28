from flask import jsonify
class Monitor:
    def __init__(self) -> None:
        pass

    
    @staticmethod
    def get_stats(redis_conn):

        try:
            responce ={}      
            client_stats = Monitor.get_client_stats(redis_conn)
            memory_stats = Monitor.get_memory_stats(redis_conn)
            server_stats = Monitor.get_server_stats(redis_conn)

            responce.update(client_stats)
            responce.update(memory_stats)
            responce.update(server_stats)

            
            if responce :

                responce = jsonify(responce)

            else:
                responce = jsonify({'error': "failed"})

        except Exception as e:
            
            responce = jsonify({"error": str(e)})

        return responce

    @staticmethod
    def get_client_stats(redis_conn):

        try:
            responce = {}    
            info_1 = redis_conn.connection.info('clients')
            info_2 = redis_conn.connection.info('stats')
            if info_1 and info_2:
                responce["connected_clients"] = info_1['connected_clients']
                responce["total_commands_processed"] = info_2['total_commands_processed']
                responce["total_connections_received"] = info_2["total_connections_received"]
            

            else:
                print({'error': "failed"})

        except Exception as e:
            
            print({"error": str(e)})

        return responce
    
    @staticmethod
    def get_memory_stats(redis_conn):

        try:
            responce = {}    
            info = redis_conn.connection.info('memory')
            if info:
                responce["used_memory"] = info['used_memory']
                responce["used_memory_peak"] = info['used_memory_peak']
                responce["used_memory_lua"] = info["used_memory_lua"]
            

            else:
                print({'error': "failed"})

        except Exception as e:
            
            print({"error": str(e)})

        return responce
    

    @staticmethod
    def get_server_stats(redis_conn):

        try:
            responce = {}    
            info = redis_conn.connection.info('server')
            if info:
                responce["redis_version"] = info['redis_version']
                responce["os"] = info['os']
                responce["process_id"] = info["process_id"]
            

            else:
                print({'error': "failed"})

        except Exception as e:
            
            print({"error": str(e)})

        return responce
    

    @staticmethod
    def get_dbs_stats(redis_conn):
        
        try:
            responce = redis_conn.connection.info('keyspace')
            if responce:

                responce = jsonify(responce)

        
            else:
                responce = jsonify({'error': "failed"})
        except Exception as e:
            
            return jsonify({"error": str(e)})

        return responce
