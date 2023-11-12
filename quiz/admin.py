from django.contrib import admin

from .models import Quiz


@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at']
    list_filter = ['created_at']
    search_fields = ['title', 'content']
    date_hierarchy = 'created_at'
    ordering = ['created_at']