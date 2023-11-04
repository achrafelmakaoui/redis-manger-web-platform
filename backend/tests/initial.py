from flask import jsonify
import requests

# Define the base URL and parameters
base_url = 'http://localhost:5000/connect'
data = {"host":"127.0.0.1", "port":6379}

# Send a POST request with parameters
response = requests.post(base_url, json=data)
print((response.text))


# Define the base URL and parameters
base_url = 'http://localhost:5000/connect'
data = {"host":"127.0.0.1", "port":6379}

# Send a POST request with parameters
response = requests.post(base_url, json=data)
print((response.text))

# Define the base URL and parameters
base_url = 'http://localhost:5000/disconnect'
# data = {"host":"127.0.0.1", "port":6379}

# Send a POST request with parameters
response = requests.post(base_url)
print((response.text))



# Define the base URL and parameters
base_url = 'http://localhost:5000/disconnect'
# data = {"host":"127.0.0.1", "port":6379}

# Send a POST request with parameters
response = requests.post(base_url)
print((response.text))
# base_url = 'http://localhost:5000/commands'

# response = requests.get(base_url)

# # Print the response
# print(response.text)
