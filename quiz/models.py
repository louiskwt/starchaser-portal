from django.db import models
from django.utils import timezone


class Quiz(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
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

