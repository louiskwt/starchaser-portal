from django.core.paginator import EmptyPage, Paginator
from django.shortcuts import get_object_or_404, render
from taggit.models import Tag


def quiz_index(request):
    return render(request, 'quiz/quiz-home.html')

