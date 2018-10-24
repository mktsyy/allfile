# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Person,Information


# Register your models here.

class PersonAdmin(admin.ModelAdmin):
    list_display = ('tier','houseinfo','housecf','rentfl','housecf5')

# admin.site.register(Person)
admin.site.register(Person,PersonAdmin)
# admin.site.register(Information)


#####testInputMKNotemodels success#####
# from .models import Notes


# class PersonAdmin(admin.ModelAdmin):
#     list_display = ('name',)

# # admin.site.register(Person)
# admin.site.register(Notes,PersonAdmin)
# admin.site.register(Information)