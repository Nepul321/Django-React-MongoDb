from django.contrib import admin
from .models import *

def register(model):
    admin.site.register(model)


register(Meetup)