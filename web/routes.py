from web import web_app

@web_app.route('/')
def index():
    return "Starchaser!"