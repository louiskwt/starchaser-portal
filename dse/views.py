from django.core.paginator import EmptyPage, Paginator
from django.shortcuts import get_object_or_404, render
from taggit.models import Tag

from .models import Post


def post_list(request, tag_slug=None):
    post_list = Post.published.all()
    tag = None
    if tag_slug:
        tag = get_object_or_404(Tag, slug=tag_slug)
        post_list = post_list.filter(tags__in=[tag])

    # Pagination
    paginator = Paginator(post_list, 5)
    page_number = request.GET.get('page', 1)
    try:
        posts = paginator.page(page_number)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)
    return render(request, 'dse/dse-home.html', {'posts': posts, 'tag': tag})

def notes_detail(request, year, month, day, post, id):
    post = get_object_or_404(Post, status=Post.Status.PUBLISHED, slug=post, published_at__year=year, published_at__month=month, published_at__day=day, id=id)
    post_tag_ids = post.tags.values_list('id', flat=True)
    related_posts = Post.published.filter(tags__in=post_tag_ids).exclude(id=post.id).order_by('-published_at')[:3]
    return render(request, 'dse/dse-note-detail.html', {'post': post, 'related_posts': related_posts})