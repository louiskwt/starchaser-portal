from flask import render_template
from web import web_app

@web_app.route('/')
def index():
    user = {'username': 'Eren'}
    return render_template('index.html', title='Home', user=user)