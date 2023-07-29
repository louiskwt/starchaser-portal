from flask import Flask

starchaser_app = Flask(__name__)


from app import routes
