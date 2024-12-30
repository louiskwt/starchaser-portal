from django.shortcuts import render

def landing_page(request):
    return render(request, 'starchaser/landing_page.html', {})