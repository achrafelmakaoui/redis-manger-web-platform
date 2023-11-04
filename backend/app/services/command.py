from . import commands
from flask import jsonify, request, session


@commands.route('/commands', methods=['GET'])
def exec_command():
    request_data = request.form
    response =  jsonify(session["redis_host"])
    return response
