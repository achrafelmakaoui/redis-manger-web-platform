import requests

# connect
base_url = 'http://localhost:5000/connect'
data = {"host": "127.0.0.1", "port": 6379, "username": None,
        "password": None, "client_name": "fbs_conn"}

response = requests.post(base_url, json=data)
print((response.text))


# # get monitoring
base_url = 'http://localhost:5000/monitor'

response = requests.get(base_url)
print((response.text))



# # logs
base_url = 'http://localhost:5000/logs'

response = requests.get(base_url)

print((response.text))



# # db stats
base_url = 'http://localhost:5000/dbs_stats'

response = requests.get(base_url)

print((response.text))
