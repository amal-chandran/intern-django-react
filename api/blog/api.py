from .models import BlogPost
from .serializers import BlogPostSerializer
from rest_framework import viewsets, permissions
from rest_framework.response import Response


class BlogPostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogPostSerializer
    # queryset = BlogPost.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.post.all()

    def create(self, request):
        request_data = request.data
        request_data['owner'] = request.user.id

        serializer = self.get_serializer(data=request_data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)


class BlogPostsViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = BlogPostSerializer
    queryset = BlogPost.objects.all()
