from rest_framework import routers
from .api import BlogPostViewSet, BlogPostsViewSet
from django.urls import include, path

router = routers.DefaultRouter()
router.register(r'admin', BlogPostViewSet, basename="blogpost")
router.register(r'', BlogPostsViewSet)

urlpatterns = router.urls
