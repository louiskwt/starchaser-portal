from django.http import HttpResponse
from django.shortcuts import render


class LandingPageView(View):
    
    def get(self, request):
        return render(request, "landing-page.html")