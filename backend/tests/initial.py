from flask import jsonify
import requests
import redis

# conn = redis.Redis(client_name="brunoo")
# info = conn.execute_command("CLIENT INFO")
# print(info)
# addr = info["addr"]
# print(conn.ping())

# print(conn.client_kill(addr))
# print(conn.ping())
# info = conn.client_id()
# print(info)
# # Define the base URL and parameters
# base_url = 'http://localhost:5000/connect'
# data = {"host":"127.0.0.1", "port":6379}

# # Send a POST request with parameters
# response = requests.post(base_url, json=data)
# print((response.text))


# # Define the base URL and parameters
# base_url = 'http://localhost:5000/connect'
# data = {"host":"127.0.0.1", "port":6379}

# # Send a POST request with parameters
# response = requests.post(base_url, json=data)
# print((response.text))

# # Define the base URL and parameters
# base_url = 'http://localhost:5000/disconnect'
# # data = {"host":"127.0.0.1", "port":6379}

# # Send a POST request with parameters
# response = requests.post(base_url)
# print((response.text))
base_url = 'http://localhost:5000/connect'
data = {"host":"127.0.0.1", "port":6379, "client_name":"bruda"}

response = requests.post(base_url,json=data)
print((response.text))


# base_url = 'http://localhost:5000/keys'
# data = [{"key":"1é","value":"blup"}, {"key":"34","value":"bilo"}, {"key":"21","value":"sup"}]
# for kv in data:
#     response = requests.post(base_url,json=kv)
#     print((response.text))

# for k in data:
#     response = requests.get(base_url,json={"key":k["key"]})
#     print((response.text))

# # Define the base URL and parameters
base_url = 'http://localhost:5000/command'
data = {"command":"ACL GETUSER default"}

redis_commands = [
    "SET mykey Hello",
    "GET mykey",
    "HSET myhash field1 value1",
    "HGET myhash field1",
    "LPUSH mylist item1",
    "LPOP mylist",
    "SADD myset member1",
    "SMEMBERS myset",
    "ZADD myzset 1 member1",
    "ZRANGE myzset 0 -1",
    "INCR mycounter",
    "DECR mycounter",
    "DEL key_to_delete",
    "EXPIRE key_to_expire 60",  # Set a key's expiration to 60 seconds
    "PING",
    "INFO"
]

for cmd in redis_commands:
    data["command"] = cmd

    # Send a POST request with parameters
    response = requests.post(base_url,json=data)
    print((response.text))
# base_url = 'http://localhost:5000/commands'

# # response = requests.get(base_url)

# # # Print the response
# # print(response.text)
