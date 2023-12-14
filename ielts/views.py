from django.core.paginator import EmptyPage, Paginator
from django.shortcuts import get_object_or_404, render
from taggit.models import Tag

from .models import IeltsPost


def post_list(request, tag_slug=None):
    post_list = IeltsPost.published.all()
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
    return render(request, 'ielts/ielts-home.html', {'posts': posts, 'tag': tag})
