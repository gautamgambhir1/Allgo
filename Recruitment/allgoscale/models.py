from django.db import models
from django.db.models.fields import EmailField

class Contactform(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    message = models.TextField()
    fill_time = models.DateField(auto_now_add=True,auto_now=False,blank=True)