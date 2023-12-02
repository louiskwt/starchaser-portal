from django.contrib.sitemaps import Sitemap

from .models import Quiz


class QuizSitemap(Sitemap):
    changefreq = 'daily'
    priority = 0.8

    def items(self):
        return Quiz.objects.all()
    
    def lastmod(self, obj):
        return obj.updated