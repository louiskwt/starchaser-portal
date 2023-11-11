from django.urls import path

from .views import quiz_index

urlpatterns = [
    path("", quiz_index, name="quiz_index"),
]
