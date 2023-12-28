
from typing import Any


class VisitCountMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response
        self.count_requests = 0

    def __call__(self, request, *args, **kwargs):
        # added middleware logic here
        # Check ip and some unique identifer 
        # generate a hash and store it
        pass 

    def process_template_response(self, request, response):
        # only update visit count if it's a unique user
        # log the url that they enter
        # pass the visitor count to template as well
        pass