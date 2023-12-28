import json
import os
from flask import  jsonify, request, session
import redis
class Conn:

    def __init__ (self):
        self.connection = None

    

    def connect(self, creds, redis_connections:list = None, app=None):


        client_name = creds.get("client_name")

        if client_name == None:
            pass
        
        same_conn = self.compare_conn_name(client_name)
        if same_conn :
            return jsonify({"message": "Already connected to Redis server."})
        
        host = creds.get("host")
        port = creds.get("port")
        username = creds.get("username") or None
        password = creds.get("password") or None
        db = creds.get("db") or None
        print(db)
        # try:
        self.disconnect()
        self.connection = redis.Redis(host=host, port=port, username=username, password=password, client_name=client_name, db=db)
        

        if (self.connection.ping()):

            connection_info = self.connection.get_connection_kwargs()
            print(connection_info)

            changed = False
            if not Conn.if_conn_in_connections_list(connection_info["client_name"], redis_connections):
                
                redis_connections.append(connection_info)
                self.update_connections(redis_connections=redis_connections)
                changed = True
            if app != None:
                app.logger.info(f'connect - db[{db or 0}] - {connection_info["client_name"]} ')
                
            return jsonify({"message": "Connected to Redis server.", "conn_info":changed})
        
            
        # except Exception as e:

        #     return jsonify({"error": "connection"})


    def use_other_db(self, db, app=None):
        
        try:
            connection_info = self.connection.get_connection_kwargs()
            self.disconnect()
            connection_info["db"] = db
            print(connection_info)
            self.connection = redis.Redis(host=connection_info['host'], port=connection_info['port'], username=connection_info['username'], password=connection_info['password'], client_name=connection_info['client_name'], db=connection_info['db'])
            # time.sleep(1)
            temp_res = self.connection.keys()
            print('keys: ', temp_res)
            responce = []
            for key in temp_res:
                responce.append(str(key))
                if app != None: 
                    app.logger.info(f'switch db - {connection_info["client_name"]} - to db[{db or 0}]')
            return ({"response": responce}) 
        
        except Exception as e:
            return ({"error": str(e)})
         

    
    def testconnection(self):
        if self.connection:

            return self.connection.ping()


    def disconnect(self):

        if self.testconnection():
            try:
                self.connection.close()
                self.connection = None
                if (not self.testconnection()):
                    
                    return jsonify({"message": "Disconnected from Redis server."})
                
            except Exception as e:
                return jsonify({"error": str(e)})
        return jsonify({"message": "Already disconnected from Redis server"})
        

    @staticmethod
    def get_connections():
        current_module_path = os.path.abspath(__file__)
        app_folder_path = os.path.dirname(os.path.dirname(current_module_path))
        redis_conf_file_path =  os.path.join(app_folder_path,'config', 'redis_config.json')

        loaded_data = None
        try:
            with open(redis_conf_file_path, 'r') as json_file:
                loaded_data = json.load(json_file)
                
        except Exception as e:
            return jsonify({"error": str(e)})
        
        return loaded_data


    def compare_conn_name(self, conn_name):
        if self.testconnection():
            print(self.connection)
            conn_creds = self.connection.get_connection_kwargs()
            return conn_creds["client_name"] == conn_name
        return 0



    @staticmethod
    def if_conn_in_connections_list(conn_name, redis_connections):
        
        for conn_info_element in redis_connections:

            if (conn_info_element["client_name"] == conn_name ):
                
                return 1

        return 0

    
    @staticmethod
    def update_connections(redis_connections):
        current_module_path = os.path.abspath(__file__)
        app_folder_path = os.path.dirname(os.path.dirname(current_module_path))
        redis_conf_file_path =  os.path.join(app_folder_path,'config', 'redis_config.json')
        try :
                
            with open(redis_conf_file_path, "w") as json_file:
                json.dump(redis_connections, json_file, indent=4)
        except Exception as e:
            return jsonify({"error": str(e)})

        return 1
    

    @staticmethod
    def validate_client(host, port, username=None, password=None):
        try:
            test_conn = redis.Redis(host, port, username=username, password=password)
        except:
            return 0
        
        if test_conn.ping():
            test_conn.close()
            test_conn = None
            return 1
        return 0


    @staticmethod
    def update_connection(client_conn_to_update, new_client_conn, redis_connections, current_conn):


        if Conn.if_conn_in_connections_list(client_conn_to_update, redis_connections)   :
            if not Conn.if_conn_in_connections_list(new_client_conn["client_name"], redis_connections):
                if Conn.validate_client(new_client_conn["host"], new_client_conn["port"]):
                    # , new_client_conn["username"], new_client_conn["password"]
                    if current_conn.compare_conn_name(client_conn_to_update):
                        current_conn.disconnect()

                    
                    for i in range(len(redis_connections)):
                        if redis_connections[i]["client_name"] == client_conn_to_update:
                            redis_connections[i] = new_client_conn
                            break
                    Conn.update_connections(redis_connections)
                            
                    return jsonify({"message":"client credentials updated successfully"})
                return jsonify({"error":"client credentials that you provided generates an error"})
            return jsonify({"error":"a client with the same creds already exists!!!"})
        return jsonify({"error":"client not found!!!!"})



    
    @staticmethod
    def del_connection(data):
        conn_name = data["client_name"]
        connections_list = Conn.get_connections()
        if Conn.if_conn_in_connections_list(conn_name, connections_list):
            connections_list =  [item for item in connections_list if item["client_name"] != conn_name]
            Conn.update_connections(connections_list)
            return jsonify({"message":"Connection deleted."})

        return jsonify({"error":"Connection not found."})





        

