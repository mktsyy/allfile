"""fillform URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from fill import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^fill/', views.fill),
    url(r'^writedata/(\d+)/', views.writedata),
    url(r'^uploadpic', views.uploadpic),
    url(r'^writeAnjukeDate/(\d+)/', views.writeAnjukeDate),
    url(r'^temptestselect/', views.temptestselect),
    url(r'^ftp/', views.ftp),
    url(r'^get10086phone/', views.get10086phone),
    url(r'^getVip58Send/', views.getVip58Send),
    url(r'^HZadmin/', views.HZadmin),
    url(r'^notes/', views.notes),
]
