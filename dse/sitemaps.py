from django.contrib.sitemaps import Sitemap

from .models import Post


class DSESitemap(Sitemap):
    changefreq = 'weekly'
    priority = 0.8

    def items(self):
        return Post.published.all()
    
    def lastmod(self, obj):
        return obj.published_at