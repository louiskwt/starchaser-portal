from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
import os
import logging
from logging.handlers import RotatingFileHandler

web_app = Flask(__name__)
web_app.config.from_object(Config)
db = SQLAlchemy(web_app)
migrate = Migrate(web_app, db)
login = LoginManager(web_app)
login.login_view = 'login'

if not web_app.debug:
    if not os.path.exists('logs'):
        os.mkdir('logs')
    file_handler = RotatingFileHandler('logs/server.log', maxBytes=10240, backupCount=10)
    file_handler.setFormatter(logging.Formatter('%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'))
    file_handler.setLevel(logging.INFO)
    web_app.logger.addHandler(file_handler)
    web_app.logger.setLevel(logging.INFO)
    web_app.logger.info('Starchaser')

from web import routes, models, errors