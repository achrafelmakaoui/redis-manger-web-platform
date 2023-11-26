# url to initiate a connection
import requests


base_url = 'http://localhost:5000/connect'
data = {"host": "127.0.0.1", "port": 6379, "username": None,
        "password": None, "client_name": "test"}

response = requests.post(base_url, json=data)
print((response.text))


# url to do keys operations

base_url = 'http://localhost:5000/keys'
data = [{"key": "r1", "value": "home"}, {"key": "34",
                                         "value": "football"}, {"key": "21", "value": "redis"}]
for kv in data:
    # putting keys

    response = requests.post(base_url, json=kv)
    print((response.text))

for k in data:
    # getting key value

    response = requests.get(base_url, json={"key": k["key"]})
    print((response.text))
# url for disconnection

base_url = 'http://localhost:5000/disconnect'

for i in range(2):
    response = requests.post(base_url)
    print((response.text))
