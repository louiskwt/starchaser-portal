from flask import render_template
from web import web_app
from web.forms import LoginForm

@web_app.route('/')
def index():
    user = {'username': 'Eren'}
    return render_template('index.html', title='Home', user=user)

@web_app.route('/login')
def login():
    form = LoginForm()
    return render_template('login.html', title='Sign In', form=form)