from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect,JsonResponse
from bs4 import BeautifulSoup as BS
import requests as req
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index(request):
    return JsonResponse({'hi':'hello'})
def register(request):
    return render(request,"signup.html")
@csrf_exempt
def logins(request):
    if request.method=="POST":
        username=request.POST['username']
        password=request.POST['password']
        user=authenticate(request,username=username,password=password)
        

        if user is not None:
            login(request,user)
            return HttpResponse("succesful")
        
        else:
            return HttpResponse("fail")


    else:
        HttpResponse("none")