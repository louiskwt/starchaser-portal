from django.core.paginator import EmptyPage, Paginator
from django.shortcuts import get_object_or_404, render

from .models import Quiz


def quiz_index(request):
    quizzes = Quiz.objects.all().values
    context = {
        'quizzes': quizzes
    }
    return render(request, 'quiz/quiz-home.html', context)

