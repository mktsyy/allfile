# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Person,Information,Taobaoke


# Register your models here.

class PersonAdmin(admin.ModelAdmin):
    list_display = ('tier','houseinfo','housecf','rentfl','housecf5')

class TaobaokeAdmin(admin.ModelAdmin):
	list_display = ("c_id",
"c_name", "c_main_pic", "c_detail", "c_series", "taobaoke_url", "c_price", "c_sales", "c_percent", 
"commission", "sells_wangwang", "sells_id", "shopName", "platform_type", "coupon_id", "coupon_num", 
"coupon_surplus", "coupon_price", "coupon_starttime", "coupon_endtime", "coupon_url", "coupon_push_url")

	##搜索框
	search_fields = ('c_name',)
	def get_search_results(self, request, queryset, search_term):
	        queryset, use_distinct = super(TaobaokeAdmin, self).get_search_results(request, queryset, search_term)
	        try:
	            search_term_as_int = int(search_term)
	            queryset |= self.model.objects.filter(age=search_term_as_int)
	        except:
	            pass
	        return queryset, use_distinct

# admin.site.register(Person)
admin.site.register(Person,PersonAdmin)
admin.site.register(Taobaoke,TaobaokeAdmin)


#####testInputMKNotemodels success#####
# from .models import Notes


# class PersonAdmin(admin.ModelAdmin):
#     list_display = ('name',)

# # admin.site.register(Person)
# admin.site.register(Notes,PersonAdmin)
# admin.site.register(Information)