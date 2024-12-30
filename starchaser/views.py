from django.shortcuts import render

def landing_page(request):
    return render(request, 'starchaser/landing_page.html', {})

def login(request):
    return render(request, 'starchaser/login.html', {})

def signup(request):
    return render(request, 'starchaser/signup.html', {})