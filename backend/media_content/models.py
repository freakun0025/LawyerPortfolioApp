# backend/media_content/models.py
from django.db import models

class MediaItem(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    image = models.ImageField(upload_to='media_items/')
    date = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title