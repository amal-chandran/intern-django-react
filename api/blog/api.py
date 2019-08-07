from .models import BlogPost
from .serializers import BlogPostSerializer
from rest_framework import viewsets, permissions


class BlogPostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogPostSerializer
    queryset = BlogPost.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticatedOrReadOnly
    # ]
