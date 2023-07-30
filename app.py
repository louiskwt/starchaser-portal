from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    resource = 'https://drive.google.com/drive/folders/19t63LXgL-I1-SOj1aDvabBqUqv0E7Ng1?usp=sharing'
    video = 'https://www.youtube.com/watch?v=FrQK56ojb6c&list=PLms_Uy6lFiB3y-oxHKe2zoUTUw3jfaBZ1'
    return render_template('index.html', r_link=resource, v_link=video) 
