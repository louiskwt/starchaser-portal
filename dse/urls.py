from django.urls import path

from .views import PostListView, notes_detail, post_list

urlpatterns = [
    path("", post_list, name="dse_main"),
    path("notes/<int:year>/<int:month>/<int:day>/<slug:post>/<int:id>/", notes_detail, name="notes_detail")
]
