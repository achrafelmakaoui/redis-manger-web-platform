from flask import Flask
import redis


def create_app():
    app = Flask(__name__)
    from .blueprints.connections import connections as connections_blueprint
    from .blueprints.commands import commands as commands_blueprint
    from .blueprints.users import users as users_blueprint

    app.register_blueprint(connections_blueprint)
    app.register_blueprint(commands_blueprint)
    app.register_blueprint(users_blueprint)
    return app
