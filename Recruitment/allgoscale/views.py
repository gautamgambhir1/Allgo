import re
from django.db import models
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ContactSerializer
from .models import Contactform

@api_view(["POST"])

def Contact(request):
    data = request.data
    serialize = ContactSerializer(data=data)
    if serialize.is_valid():
        serialize.save()
        return Response(data=serialize.data,status=201)
    
    return Response(data = serialize.errors,status=400)
    

@api_view(["POST"])
def ALlinfo(request):
    startdate = request.data["startdate"]
    enddate = request.data["enddate"]
    alldata = Contactform.objects.filter(fill_time__range=(startdate,enddate))
    serialize = ContactSerializer(alldata,many = True)
    return Response(data=serialize.data,status=200)

