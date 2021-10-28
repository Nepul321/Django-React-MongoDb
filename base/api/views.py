from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MeetupSerializer

from ..models import Meetup
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/meetups/',
		'Detail View':'/meetup-details/<str:pk>/',
		'Create':'/add-meetup/',
		'Update':'/meetup-update/<str:pk>/',
		'Delete':'/delete-meetup/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def MeetupList(request):
	Meetups = Meetup.objects.all().order_by('-id')
	serializer = MeetupSerializer(Meetups, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def MeetupDetail(request, pk):
	Meetups = Meetup.objects.get(id=pk)
	serializer = MeetupSerializer(Meetups, many=False)
	return Response(serializer.data)


@api_view(['POST'])
def MeetupCreate(request):
	serializer = MeetupSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def MeetupUpdate(request, pk):
	meetup = Meetup.objects.get(id=pk)
	serializer = MeetupSerializer(instance=meetup, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def MeetupDelete(request, pk):
	meetup = Meetup.objects.get(id=pk)
	meetup.delete()

	return Response('Item succsesfully delete!')

@api_view(['POST'])
def AddtoFavorites(request, pk):
    meetup = Meetup.objects.get(id=pk)
    meetup.is_favorite = True
    meetup.save()

    return Response("Item added to favorites")

@api_view(['POST'])
def RemoveFromFavorites(request, pk):
    meetup = Meetup.objects.get(id=pk)
    meetup.is_favorite = False
    meetup.save()

    return Response("Item removed from favorites")