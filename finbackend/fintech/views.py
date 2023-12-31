from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect,JsonResponse
from bs4 import BeautifulSoup as BS
import requests as req
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
import json
from newsscrapper import newsscrapp,sentiment
from rest_framework.decorators import api_view
from rest_framework.response import Response

from . models import *
from django.db import IntegrityError

# Create your views here.
def index(request):
    return JsonResponse({'hi':'hello'})
def register(request):
    return render(request,"signup.html")
@csrf_exempt
def logins(request):
    if request.method=="POST":
        data=request.body
        string=data.decode('utf-8')
        x=json.loads(string)

        username=x['username']
        password=x['password']
        user=authenticate(request,username=username,password=password)
        

        if user is not None:
            login(request,user)
            return JsonResponse({'status':"success"})
        
        else:
            return JsonResponse({'status':"fail"})


    if request.method=="GET":
        return HttpResponse("none")
    

#Returns the score of the company as a float
def get_index(request,id):
    lst=newsscrapp(id)
    return JsonResponse({'score':sentiment(lst)})



# Returns news as a list of strings.
def return_news_json(request,id):
    lst=newsscrapp(id)
    return JsonResponse({'news':lst})


@api_view(['GET'])
def current_user(requests):
    return Response({'user':requests.user.username})
@csrf_exempt
def register(request):
    if request.method == "POST":
            data=request.body
            string=data.decode("utf-8")
            x=json.loads(string)
            username = x["username"]
            email = x["email"]

            # Ensure password matches confirmation
            password = x["password"]
            confirmation = x["confirmation"]
            if password != confirmation:
                return JsonResponse({"status":"p & c no match"})

            # Attempt to create new user
            try:
                user = User.objects.create_user(username, email, password)
                user.save()
                
            except IntegrityError:
                return JsonResponse({"status":"user_already_exists"})
            login(request, user)
            return JsonResponse({"status":"success"})
def track(requests,id):
    company=Company.objects.get(name=id)
    user=User.objects.get(id=requests.user.id)
    user.track.add(company)
    return JsonResponse({"status successfull"})

def untrack(requests,id):
    company=Company.objects.get(name=id)
    user=User.objects.get(id=requests.user.id)
    user.track.remove(company)
    return JsonResponse({"status successfull"})


def tracklist(request):
    user=User.objects.get(id=request.user.id)
    comapylist=[x for x in user.track.all()]
    return JsonResponse({"tracked":comapylist})