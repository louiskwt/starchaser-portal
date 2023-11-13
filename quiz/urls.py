from django.urls import path

from .views import quiz_index, quiz_page

urlpatterns = [
    path("", quiz_index, name="quiz_index"),
    path("<slug:quiz>/", quiz_page, name="quiz-page"),
]
