from collections import namedtuple
from django.urls import path
from .views import (
    Home,
)

from .api.views import (
    MeetupList,
    apiOverview,
    MeetupDelete,
    MeetupCreate,
    MeetupUpdate,
    MeetupDetail,
    AddtoFavorites,
    RemoveFromFavorites
)

urlpatterns = [
    path('', Home, name="home"),
    path('meetups/', MeetupList, name="meetups"),
    path('add-to-favorites/<str:pk>/', AddtoFavorites, name="addtofavorites"),
    path('remove-from-favorites/<str:pk>/', RemoveFromFavorites, name="removefromfavorites"),
    path('api-overview/', apiOverview, name="apioverview"),
    path('add-meetup/', MeetupCreate, name="add-meetup"),
    path('meetup-details/<str:pk>/', MeetupDetail, name="meetup-details"),
    path('meetup-update/<str:pk>/', MeetupUpdate, name="meetup-update"),
    path('delete-meetup/<str:pk>/', MeetupDelete, name="meetup-delete"),
]
