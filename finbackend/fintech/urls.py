from django.contrib import admin
from django.urls import path,include
from . import views


urlpatterns=[
    path('',views.index,name="index"),
    path('register',views.register,name="register"),
    path('login_view',views.logins,name="login"),
    path('score/<str:id>',views.get_index),
    path('news/<str:id>',views.return_news_json),
    path("user",views.current_user),
    path("track/<str:id>",views.track),
    path("untrack/<str:id>",views.track),
    path("tracklist",views.tracklist)
]