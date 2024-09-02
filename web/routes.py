from flask import render_template, flash, redirect, url_for
from web import web_app
from web.forms import LoginForm

@web_app.route('/')
def index():
    user = {'username': 'Eren'}
    return render_template('index.html', title='Home', user=user)

@web_app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Login successfully! Welcome {}, remember_me={}'.format(form.username.data, form.remember_me.data))
        return redirect(url_for('index'))
    return render_template('login.html', title='Sign In', form=form)