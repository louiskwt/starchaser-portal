from django.contrib import admin

from .models import Post


@admin.register(Post)
class DsePostAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'published_at', 'status', 'created_at']
    list_filter = ['status', 'published_at']
    search_fields = ['title', 'body']
    date_hierarchy = 'published_at'
    ordering = ['status', 'published_at']