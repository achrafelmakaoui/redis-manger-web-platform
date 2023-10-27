import redis
from flask import Flask

app = Flask(__name__)
redis_conn = redis.StrictRedis(host='localhost', port=6379, db=0)
