from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class BlogPost(models.Model):
    title = models.fields.CharField(max_length=100)
    body = models.fields.TextField()
    owner = models.ForeignKey(
        User, related_name="post", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
