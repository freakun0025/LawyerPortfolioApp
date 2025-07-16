# backend/testimonials/admin.py
from django.contrib import admin
from .models import Testimonial

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'title')
    search_fields = ('name', 'testimonial')
     # Removed rating from list_filter