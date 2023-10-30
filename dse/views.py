from django.views.generic import ListView

from .models import Post


class PostListView(ListView):
    queryset = Post.published.all()
    content_object_name = 'post_list'
    template_name = "dse-home.html"

