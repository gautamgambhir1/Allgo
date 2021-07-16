
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Contactform

class ContactSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.EmailField(validators=[UniqueValidator(queryset=Contactform.objects.all(), message="email aready exist")])
    message = serializers.CharField()

    class Meta:
        model = Contactform
        fields = ["id","first_name","last_name","email","message","fill_time"]