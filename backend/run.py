# import redis
# from flask import Flask, jsonify, redirect, request, render_template, session, url_for


# app = Flask(__name__)
# # redis_conn = redis.StrictRedis(host='localhost', port=6379, db=0)


# @app.route('/')
# def home():
#     return "hello achraf idiot"


# @app.route('/connect')
# def connect():
#     return "connected"


# @app.route('/disconnect')
# def disconnect():
#     return "disconnected"


# @app.route('/keys', methods=['GET'])
# def get_keys():
#     return "all keys"


# @app.route('/keys', methods=['POST'])
# def add_key():
#     return "added successfully!!"


# @app.route('/keys/<key_name>', methods=['DELETE'])
# def delete_key(key_name):
#     return key_name


# @app.route('/keys/<key_name>', methods=['GET'])
# def get_value(key_name):
#     return (str(key_name) + ": shutup dude!!!")


# @app.route('/keys/<key_name>', methods=['PUT'])
# def update_key_value(key_name):

#     return "updated"


from app import create_app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
