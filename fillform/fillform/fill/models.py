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

##使用using方法，这里需要添加新类，下方变量名为需查询表中同等名称，Meta下增加表名和数据库名）    
class NotesTitle(models.Model):
    name = models.TextField(max_length=30,null=True)
    remoteid = models.TextField(max_length=30,null=True)

    class Meta:
        app_label = "MKNote" #数据库名
        db_table = 'Notes' #表名

class NotesContent(models.Model):
    CONTENT = models.TextField(max_length=30,null=True)

    class Meta:
        app_label = "MKSearch" #数据库名
        db_table = 'NOTECONTENT' #表名

class Taobaoke(models.Model):
    c_id = models.CharField(max_length=60,null=True)
    c_name = models.CharField(max_length=60,null=True)
    c_main_pic = models.CharField(max_length=60,null=True)
    c_detail =  models.CharField(max_length=60,null=True)
    c_series =  models.CharField(max_length=60,null=True)
    taobaoke_url =  models.CharField(max_length=60,null=True)
    c_price =  models.CharField(max_length=60,null=True)
    c_sales =  models.CharField(max_length=60,null=True)
    c_percent = models.CharField(max_length=60,null=True)
    commission =  models.CharField(max_length=60,null=True)
    sells_wangwang = models.CharField(max_length=60,null=True)
    sells_id = models.CharField(max_length=60,null=True)
    shopName = models.CharField(max_length=60,null=True)
    platform_type =  models.CharField(max_length=60,null=True)
    coupon_id =  models.CharField(max_length=60,null=True)
    coupon_num =  models.CharField(max_length=60,null=True)
    coupon_surplus = models.CharField(max_length=60,null=True)
    coupon_price = models.CharField(max_length=60,null=True)
    coupon_starttime = models.CharField(max_length=60,null=True)
    coupon_endtime = models.CharField(max_length=60,null=True)
    coupon_url =  models.CharField(max_length=60,null=True)
    coupon_push_url =  models.CharField(max_length=60,null=True) 

