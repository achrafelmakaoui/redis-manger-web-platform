from . import users
from flask import jsonify, request


@users.route('/users', methods=['GET'])
def get_users():
    json_data = request.get_json()

    return str(json_data)
