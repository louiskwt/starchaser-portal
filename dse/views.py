from django.shortcuts import render

class PostListView(ListView):
    model = Post
    template_name = "dse-home.html"
