from app import starchaser_app 

@starchaser_app.route('/')
@starchaser_app.route('/index')
def index():
    return "Hello Starchaser"

