from django.urls import path

from .views import notes_detail, post_list

urlpatterns = [
    path("", post_list, name="dse_main"),
    path('/<slug:tag_slug>/', post_list, name='dse_post_list_by_tag'),
    path("notes/<int:year>/<int:month>/<int:day>/<slug:post>/<int:id>/", notes_detail, name="notes_detail")
]
