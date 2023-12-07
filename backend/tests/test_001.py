import requests

# connetions test

# url to initiate a connection
base_url = 'http://localhost:5000/connect'
data = {"host": "127.0.0.1", "port": 6379, "username": None,
        "password": None, "client_name": "hadoop"}

response = requests.post(base_url, json=data)
print((response.text))


# disconnection test

# url for disconnection

base_url = 'http://localhost:5000/disconnect'

for i in range(2):
    response = requests.post(base_url)
    print((response.text))

# get all connections

# url for getting the connections:

base_url = 'http://localhost:5000/connections'
response = requests.get(base_url)
print((response.text))


# delete a conncection
connection = {"client_name": "hadoop"}

response = requests.delete(base_url, json=connection)
print((response.text))


# checking the new connection list

response = requests.get(base_url)
print((response.text))


# put a connection

data = {
    "client_name": "myconn",
    "new_client": {"db": 0,
                   "username": None,
                   "password": None,
                   "socket_timeout": None,
                   "encoding": "utf-8",
                   "encoding_errors": "strict",
                   "decode_responses": None,
                   "retry_on_error": [],
                   "retry": None,
                   "health_check_interval": 0,
                   "client_name": "my_new_conn",
                   "lib_name": "redis-py",
                   "lib_version": "5.0.1",
                   "redis_connect_func": None,
                   "credential_provider": None,
                   "protocol": 2,
                   "host": "127.0.0.1",
                   "port": 6379,
                   "socket_connect_timeout": None,
                   "socket_keepalive": None,
                   "socket_keepalive_options": None,
                   }}
response = requests.put(base_url, json=data)
print((response.text))


# checking the new connection list

response = requests.get(base_url)
print((response.text))

# connect
base_url = 'http://localhost:5000/connect'
data = {"host": "127.0.0.1", "port": 6379, "username": None,
        "password": None, "client_name": "fbs_conn"}

response = requests.post(base_url, json=data)
print((response.text))

# execute command

# command url

base_url = 'http://localhost:5000/command'
redis_commands = [
    "ACL GETUSER default",
    "SET mykey Hello",
    "GET mykey",
    "PING",
    "INFO"
]

for cmd in redis_commands:
    data["command"] = cmd
    # Send a POST request with parameters
    response = requests.post(base_url, json=data)
    print((response.text))


# put keys:

# url to do keys operations

base_url = 'http://localhost:5000/keys'
data = [{"key": "r1", "value": "testvalue"}, {"key": "34",
                                              "value": "football"}, {"key": "21", "value": "redis"}]
for kv in data:
    # putting keys

    response = requests.post(base_url, json=kv)
    print((response.text))

for k in data:
    # getting key value

    response = requests.get(base_url, json={"key": k["key"]})
    print((response.text))
