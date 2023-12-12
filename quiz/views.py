from django.core.paginator import EmptyPage, Paginator
from django.shortcuts import get_object_or_404, render

from .models import Quiz


def quiz_index(request):
    quiz_list = Quiz.objects.all()

    paginator = Paginator(quiz_list, 15)
    page_number = request.GET.get('page', 1)

    try:
        quizzes = paginator.page(page_number)
    except EmptyPage:
        quizzes = paginator.page(paginator.num_pages)
    
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
