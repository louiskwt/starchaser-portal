from django.db import models


class Quiz(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    slug = models.SlugField()
    source = models.TextField()
    created_at = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['-created_at'])
        ]
    
    def __str__(self):
        return self.title

