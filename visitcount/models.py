from django.db import models
from django.utils import timezone


class VisitCount(models.Model):
    count = models.IntegerField()
    date = models.DateTimeField(default=timezone.now)
    client = models.TextField

    def __str__(self):
        return f'A new visit on ${self.date}'
    