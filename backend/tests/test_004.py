import requests

# connect
base_url = 'http://localhost:5000/connect'
data = {"host": "127.0.0.1", "port": 6379, "username": None,
        "password": None, "client_name": "fbs_conn"}

response = requests.post(base_url, json=data)
print((response.text))



# delete
base_url = 'http://localhost:5000/keys'
data = {"key": "testing"}

response = requests.delete(base_url, json=data)
print((response.text))