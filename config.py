import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'black-pink-in-your-area'