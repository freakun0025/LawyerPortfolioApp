# backend/media_content/views.py
from rest_framework import generics
from django.db.models import F
from .models import MediaItem
from .serializers import MediaItemSerializer

class MediaItemListView(generics.ListAPIView):
    serializer_class = MediaItemSerializer
    
    def get_queryset(self):
        # Get the base queryset
        queryset = MediaItem.objects.all()
        
        # Filter by category if provided
        category = self.request.query_params.get('category', None)
        if category and category.lower() != 'all':
            queryset = queryset.filter(category=category)
        
        # Order by date, but place null dates at the end
        # First get items with dates, then those without
        return list(queryset.exclude(date__isnull=True).order_by('-date')) + \
               list(queryset.filter(date__isnull=True).order_by('-created_at'))