"""starchaser_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.urls import include, path

from dse.sitemaps import DSESitemap
from quiz.sitemaps import QuizSitemap
from starchaser_project.views import LandingPageView

from .sitemaps import StaticViewSitemap

sitemaps = {
    'dse': DSESitemap,
    'quiz': QuizSitemap,
    'static': StaticViewSitemap
}

urlpatterns = [
    path('admin/', admin.site.urls),
    path('dse/', include('dse.urls')),
    path('quiz/', include('quiz.urls')),
    path('ielts/', include('ielts.urls')),
    path("", LandingPageView.as_view(), name="home"),
    path("sitemap.xml", sitemap, {"sitemaps": sitemaps}, name="django.contrib.sitemaps.views.sitemap")
]
