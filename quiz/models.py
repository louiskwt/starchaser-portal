from django.db import models
from django.urls import reverse
from django.utils import timezone


class Quiz(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    vocab_list = models.TextField(null=True, blank=True)
    slug = models.SlugField()
    source = models.TextField()
    created_at = models.DateField(default=timezone.now)

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['-created_at'])
        ]
    
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("quiz-page", args=[self.slug])

