from flask import render_template, flash, redirect, url_for, request
from urllib.parse import urlsplit
from web import web_app, db
from web.forms import LoginForm, RegistrationForm, EditProfileForm
from flask_login import current_user, login_user, login_required, logout_user
from web.models import User
import sqlalchemy as sa
from datetime import datetime, timezone

@web_app.before_request
def before_request():
    if current_user.is_authenticated:
        current_user.last_seen = datetime.now(timezone.utc)
        db.session.commit()

@web_app.route('/')
@login_required
def index():
    user = {'username': 'Eren'}
    return render_template('index.html', title='Home')

@web_app.route('/student/<studentname>')
@login_required
def student(studentname):
    student = db.first_or_404(sa.select(User).where(User.username == studentname))
    updates = [
        {'author': student, 'body': 'Testing 1'},
        {'author': student, 'body': 'Testing 2'}
    ]
    return render_template('student.html', student=student, updates=updates)

@web_app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = LoginForm()
    if form.validate_on_submit():
        user = db.session.scalar(sa.select(User).where(User.username == form.username.data))
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password')
            return redirect(url_for('login'))
        login_user(user, remember=form.remember_me.data)
        next_page = request.args.get('next')
        if not next_page or urlsplit(next_page).netloc != '':
            next_page = url_for('index')
        flash('Login successfully! Welcome {}~'.format(form.username.data))
        return redirect(url_for(next_page))
    return render_template('login.html', title='Sign In', form=form)

@web_app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Congratulations, you are now a registered user')
        return redirect(url_for('login'))
    return render_template('register.html', title='Register', form=form)

@web_app.route('/edit_profile', methods=['GET', 'POST'])
@login_required
def edit_profile():
    form = EditProfileForm()
    if form.validate_on_submit():
        current_user.username = form.username.data
        current_user.about_me = form.about_me.data
        db.session.commit()
        flash('Your changes have been saved.')
        return redirect(url_for('edit_profile'))
    elif request.method == 'GET':
        form.username.data = current_user.username
        form.about_me.data = current_user.about_me
    return render_template('edit_profile.html', title='Edit Profile', form=form)

@web_app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))