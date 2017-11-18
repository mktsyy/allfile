# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Person(models.Model):
    tier = models.CharField(max_length=30,null=True)
    houseinfo = models.CharField(max_length=30,null=True)
    housecf = models.CharField(max_length=30,null=True)
    rentfl = models.CharField(max_length=30,null=True)
    housecf5 = models.CharField(max_length=30,null=True)
    def __unicode__(self):# 在Python3中用 __str__ 代替 __unicode__
            return self.tier

class Information(models.Model):
    address = models.CharField(max_length=30,null=True)
    streetname = models.CharField(max_length=30,null=True)
    district = models.CharField(max_length=30,null=True)
    blockid = models.CharField(max_length=30,null=True)
    blockname = models.CharField(max_length=30,null=True)
