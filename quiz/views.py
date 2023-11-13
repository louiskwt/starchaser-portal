from django.shortcuts import get_object_or_404, render

from .models import Quiz


def quiz_index(request):
    quizzes = Quiz.objects.all()
    context = {
        'quizzes': quizzes
    }
    return render(request, 'quiz/quiz-home.html', context)


def quiz_page(request, quiz):
    quiz = Quiz.objects.get(slug=quiz)
    context = {
        'quiz': quiz
    }
    return render(request, 'quiz/quiz-page.html', context)
