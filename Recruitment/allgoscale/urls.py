from django.urls import path,include
from rest_framework import views
from .views import ALlinfo, Contact

urlpatterns = [
    path('register',Contact,name="Contact"),
    path('allinfo',ALlinfo,name="allinfo"),
]