import json
from flask import jsonify
import requests


# # Test the connect methode
# # Define the base URL and parameters
# base_url = 'http://localhost:5000/connect'
# data = {"host":"127.0.0.1", "port":6379, "username":None, "password":None, "client_name":"dude"}

# # Send a POST request with parameters
# response = requests.post(base_url, json=data)
# print((response.text))

# base_url = 'http://localhost:5000/connect'
# data = {"host":"127.0.0.1", "port":6379, "username":None, "password":None, "client_name":"brocoli"}

# # Send a POST request with parameters
# response = requests.post(base_url, json=data)
# print((response.text))




# # Test the disconnect methode

# # Define the base URL and parameters
# # base_url = 'http://localhost:5000/disconnect'

# # for i in range(1):
# #     # Send a POST request with parameters
# #     response = requests.post(base_url)
# #     print((response.text))



# # Test the get connection method:
# # Define the base URL and parameters
# base_url = 'http://localhost:5000/connections'
# # data = {"host":"127.0.0.1", "port":6379}

# for i in range(1):
#     # Send a POST request with parameters
#     response = requests.get(base_url)
#     print((response.text))

# base_url = 'http://localhost:5000/connections'

# data = {
#     "client_name":"brocoli",
#     "new_client":{"db": 0,
#         "username": None,
#         "password": None,
#         "socket_timeout": None,
#         "encoding": "utf-8",
#         "encoding_errors": "strict",
#         "decode_responses": None,
#         "retry_on_error": [],
#         "retry": None,
#         "health_check_interval": 0,
#         "client_name": "dude",
#         "lib_name": "redis-py",
#         "lib_version": "5.0.1",
#         "redis_connect_func": None,
#         "credential_provider": None,
#         "protocol": 2,
#         "host": "127.0.0.1",
#         "port": 6379,
#         "socket_connect_timeout": None,
#         "socket_keepalive": None,
#         "socket_keepalive_options": None,
#     }}
#     # Send a POST request with parameters
# response = requests.put(base_url, json=data)
# print((response.text))    

# to_delete = {"db": 0,
#         "username": None,
#         "password": None,
#         "socket_timeout": None,
#         "encoding": "utf-8",
#         "encoding_errors": "strict",
#         "decode_responses": None,
#         "retry_on_error": [],
#         "retry": None,
#         "health_check_interval": 0,
#         "client_name": "auu",
#         "lib_name": "redis-py",
#         "lib_version": "5.0.1",
#         "redis_connect_func": None,
#         "credential_provider": None,
#         "protocol": 2,
#         "host": "127.0.0.1",
#         "port": 6379,
#         "socket_connect_timeout": None,
#         "socket_keepalive": None,
#         "socket_keepalive_options": None,
#     }




# response = requests.delete(base_url, json=data)
# print((response.text))    

# base_url = 'http://localhost:5000/connections'

# data = {
#     "client_name":"brocoli",
#     "new_client":{"db": 0,
#         "username": None,
#         "password": None,
#         "socket_timeout": None,
#         "encoding": "utf-8",
#         "encoding_errors": "strict",
#         "decode_responses": None,
#         "retry_on_error": [],
#         "retry": None,
#         "health_check_interval": 0,
#         "client_name": "pepsi",
#         "lib_name": "redis-py",
#         "lib_version": "5.0.1",
#         "redis_connect_func": None,
#         "credential_provider": None,
#         "protocol": 2,
#         "host": "127.0.0.1",
#         "port": 6379,
#         "socket_connect_timeout": None,
#         "socket_keepalive": None,
#         "socket_keepalive_options": None,
#     }}
#     # Send a POST request with parameters
# response = requests.put(base_url, json=data)
# print((response.text))  

