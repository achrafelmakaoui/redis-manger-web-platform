
import requests

# connect
base_url = 'http://localhost:5000/connect'
data = {"host": "127.0.0.1", "port": 6379, "username": None,
        "password": None, "client_name": "fbs_conn"}

response = requests.post(base_url, json=data)
print((response.text))

data = {}
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
