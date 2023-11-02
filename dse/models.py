from django.db import models
from django.urls import reverse
from taggit.managers import TaggableManager


class PublishedManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status=Post.Status.PUBLISHED)

class Post(models.Model):
    class Status(models.TextChoices):
        DRAFT = 'DF', 'Draft'
        PUBLISHED = 'PB', 'Published'

    title = models.CharField(max_length=256)
    body = models.TextField()
    slug = models.SlugField()
    description = models.TextField(max_length=256)
    status = models.CharField(max_length=2, choices=Status.choices, default=Status.DRAFT)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    published_at = models.DateField(auto_now=True)

    objects = models.Manager()
    published = PublishedManager()
    tags = TaggableManager()

    class Meta:
        ordering = ['-published_at']
        indexes = [
            models.Index(fields=['-published_at'])
        ]


    def __str__(self):
        return self.title[:30]

    def get_absolute_url(self):
        return reverse("notes_detail", args=[self.published_at.year, self.published_at.month, self.published_at.day, self.slug, self.id])
