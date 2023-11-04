import json
from flask import Flask, jsonify
from .services.connection import Conn



def create_app():
    app = Flask(__name__)
    app.secret_key = "Njzk^9s7X$!D8b2p&5*f^@Gv3v6zT#pA"
    redis_conn = Conn()
    redis_connections = Conn.get_connections()
    return app, redis_connections, redis_conn
