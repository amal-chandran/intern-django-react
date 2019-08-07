from rest_framework import routers
from .api import BlogPostViewSet
from django.urls import include, path

router = routers.DefaultRouter()
router.register(r'', BlogPostViewSet)

urlpatterns = router.urls
