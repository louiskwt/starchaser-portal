from django.shortcuts import render

# Create your views here.
def index(request):
    # course = get_object_or_404(Course, id=course_id)
    # quiz = get_object_or_404(Quiz, course=course)
    return render(request, 'quiz/index.html', {})