from django.urls import path

from .views import PostListView, notes_detail

urlpatterns = [
    path("", PostListView.as_view(), name="dse_main"),
    path("notes/<int:year>/<int:month>/<int:day>/<slug:post>/<int:id>/", notes_detail, name="notes_detail")
]
