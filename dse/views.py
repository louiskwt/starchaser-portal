from django.shortcuts import get_object_or_404, render
from django.views.generic import ListView

from .models import Post


class PostListView(ListView):
    queryset = Post.published.all()
    context_object_name = 'post_list'
    paginate_by = 5
    template_name = "dse-home.html"


def notes_detail(request, year, month, day, post, id):
    post = get_object_or_404(Post, status=Post.Status.PUBLISHED, slug=post, published_at__year=year, published_at__month=month, published_at__day=day, id=id)
    return render(request, 'note_detail.html', {'post': post})