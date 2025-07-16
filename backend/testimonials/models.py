# backend/testimonials/models.py
from django.db import models

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    testimonial = models.TextField()
    
    # Fix the __str__ method since 'service' field was removed
    def __str__(self):
        return f"{self.name} - {self.title}"