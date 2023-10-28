from flask import jsonify, request


@connections.route('/connect', methods=['POST'])
def connect():
    json_data = request.get_json()

    return "connected"
