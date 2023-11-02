from django.core.paginator import EmptyPage, Paginator
from django.shortcuts import get_object_or_404, render
from django.views.generic import ListView

from .models import Post


class PostListView(ListView):
    queryset = Post.published.all()
    context_object_name = 'post_list'
    paginate_by = 5
    template_name = "dse-home.html"

def post_list(request):
    post_list = Post.published.all()
    paginator = Paginator(post_list, 5)
    page_number = request.GET.get('page', 1)
    try:
        posts = paginator.page(page_number)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)
    return render(request, 'dse/dse-home.html', {'posts': posts})

def notes_detail(request, year, month, day, post, id):
    post = get_object_or_404(Post, status=Post.Status.PUBLISHED, slug=post, published_at__year=year, published_at__month=month, published_at__day=day, id=id)
    return render(request, 'dse/dse-note-detail.html', {'post': post})