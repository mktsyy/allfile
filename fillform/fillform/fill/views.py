# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
from fill.models import Person
from fill.models import Information
import json
from django.http import JsonResponse

# Create your views here.
# 
import sys
defaultencoding = 'utf-8'
if sys.getdefaultencoding() != defaultencoding:
    reload(sys)
    sys.setdefaultencoding(defaultencoding)


def fill(request):
	a = request.GET.get('a',0)
	b = request.GET.get('b',0)
	c = request.GET.get('c',0)
	d = request.GET.get('d',0)
	e = request.GET.get('e',0)
	f = request.GET.get('f',0)
	g = request.GET.get('g',0)
	h = request.GET.get('h',0)

	
	if a:
		#写入数据库
		Person.objects.create(tier=a,houseinfo=b,housecf=c,rentfl=d,housecf5=e)
		returndata = Person.objects.all()[len(Person.objects.all())-1]
		with open("D:\codes\\allfile\chrome_fill_login\\readscript.js","w+") as f:
			f.write('console.log("'+'%c'+'%s", "color: #e40c0c;font-size: xx-large;")\n' % (returndata.tier).encode("utf-8"))
			f.write('document.getElementById("muban").click();\n')
			f.write('document.getElementById("blockshowname").value="%s"\n' % (returndata.tier).encode("utf-8"))
			f.write('document.getElementsByName("renttype")[1].checked = true\n')
			f.write('document.getElementById("price").value=%s\n' % returndata.rentfl.encode("utf-8"))
			f.write('document.getElementById("buildarea").value=%s\n' % returndata.housecf.encode("utf-8").split('㎡')[0])
			f.write('document.getElementsByName("room")[0].value=%s\n' % returndata.houseinfo.encode("utf-8").split("室")[0])
			f.write('document.getElementsByName("hall")[0].value=%s\n' % returndata.houseinfo.encode("utf-8").split("室")[1].split("厅")[0])
			f.write('document.getElementsByName("toilet")[0].value=%s\n' % returndata.houseinfo.encode("utf-8").split("室")[1].split("厅")[1][0])

			if int(returndata.housecf5.encode("utf-8").split("/")[0])==0:
				f.write('document.getElementsByName("floor")[0].value=%s\n' % "3")
			else:
				f.write('document.getElementsByName("floor")[0].value=%s\n' % returndata.housecf5.encode("utf-8").split("/")[0])

			if int(returndata.housecf5.encode("utf-8").split("/")[1].split("层")[0])==0:
				f.write('document.getElementsByName("totalfloor")[0].value=%s\n' % "7")
			else:
				f.write('document.getElementsByName("totalfloor")[0].value=%s\n' % returndata.housecf5.encode("utf-8").split("/")[1].split("层")[0])
			

			kkkk = '''document.getElementsByName("fitment")[0].value="精装"
document.getElementsByName("forward")[0].value="南北通透"
document.getElementsByName("payment")[0].value="月付"
document.getElementsByName("rentroom")[0].value="次卧"
document.getElementById("jsAllcheckbox").checked=true

for (var i = 10 - 1; i >= 0; i--) {
	document.getElementsByName("equipment[]")[i].checked=true
};\n
'''

			f.write(kkkk)
			title = (returndata.tier).encode("utf-8")+"环境优雅 闹中取静 交通便利 温馨舒适 阳光充足"
			f.write('document.getElementById("address").value="%s"\n' % title)
			
			selectpic = '''
setTimeout(function(){
for (var i = 1; i < 5; i++) {
	document.getElementsByClassName("btn")[i].click()
	}
},1000)
''' 
			f.write(selectpic)
			#拿取小区地址自动填入
			idjavascript = '''
function myTimer() {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
            console.log(JSON.parse(xmlhttp.responseText))
            document.getElementById("district").value = JSON.parse(xmlhttp.responseText).district
            document.getElementById("street").value = JSON.parse(xmlhttp.responseText).streetname
            document.getElementById("blockaddress").value = JSON.parse(xmlhttp.responseText).address
            document.getElementById("blockshowname").value=JSON.parse(xmlhttp.responseText).blockname
            window.scroll(100,1650);
        } 
    }
    xmlhttp.open("GET", "http://nj.zsb.house365.com/ajax/find_block_detail/?id=%s" , true);
    
    xmlhttp.send();

};
myTimer();\n

document.onkeydown=function(event){
      var e = event || window.event || arguments.callee.caller.arguments[0];
                
       // if(e && e.keyCode==13){ // enter 键
       if(e && e.keyCode==32){ // space 键
           document.getElementById("jsBtnSubmit_rent").click();
      }
  }; 

			''' % (str(getid((returndata.tier).encode("utf-8"))))

			f.write(idjavascript)
			
			# content = '''
			# 嗨住的优质房源
			# 【便利的交通&成熟的配套】
			# 超市，银行，医院，学校，便利店，菜市场，购物广场应有尽有,安全性高、位置安静、靠近花园、采光什么都非常好
			# 【装修精致\配套成熟的整租房源】

			# 厨房、卫生间、热水器、空调、WIFI,设备齐全，拎包就能入住,还有送车位的哦~
			# 【有趣善良的合租室友】
			# 那些直播里的萌妹纸、那些陆家嘴的金融GG、那些一身正气的程序员，可能就是你隔壁的室友~那些合租的小伙伴都是素质住户
			# 【品质小区】
			# 小区都处于繁华地段、房型正、佳、环境非常优美、都是一些次新小区
			# 嗨住的优质服务
			# * 无任何中介费
			# 嗨住房源实地勘察，保证嗨住租房平台房源可租信息实时可靠
			# * 房源广（7x24不断更新中）
			# 上海房源48396、北京16411、杭州23495、南京12055
			# * 直呼房东
			# 租客可通过嗨住租房上公开的房东电话，直接呼叫联系房东，询问房屋信息、预约看 房、达成交易。
			# * 免费预约
			# 租客可直接在嗨住租房平台提交对某套房的看房预约请求，嗨住顾问将免费为租客协调与房东的见面时间，与房东直接见面，达成交易。
			# * 租后服务
			# 嗨住还为租客提供了房租分期、室友征选、搬家维修等系列租后服务。
			# 更多房源欢迎致电4008180555(上海4008180555，杭州4008170019，南京4001606145）
			# 或
			# 至任意手机应用市场下载“嗨住租房”app


			# '''

			

		return HttpResponse (a)
	if f:
		rdict = {}
		returndata = Person.objects.all()[len(Person.objects.all())-1]
		rdict['tier'] = returndata.tier
		rdict['houseinfo'] = returndata.houseinfo
		rdict['housecf'] = returndata.housecf
		rdict['rentfl'] = returndata.rentfl
		rdict['housecf5'] = returndata.housecf5
		


		return HttpResponse(json.dumps(rdict),content_type="application/json")
		# return HttpResponse("here")
	if g:
		# print eval(g)['address']
		Information.objects.create(address=eval(g)['address'],streetname=eval(g)['streetname'],district=eval(g)['district'],blockid=eval(g)['blockid'],blockname=eval(g)['blockname'])

	if h:
		Person.objects.all().delete();
		
	k = ""
	data = Person.objects.all()
	for i in data:
		k+=i.tier+i.houseinfo+i.housecf+i.rentfl+i.housecf5+"---"
	return HttpResponse(k)


	return HttpResponse (a)



def getid(a):
	with open("D:\codes\\allfile\id.html","r") as f:
		for i in f.readlines():
			if a in i:
				id =  i.split('addlishi(')[1].split(')')[0]
				# print i
				break
	return id


def writedata(request,datanum):
	returndata = Person.objects.all()[len(Person.objects.all())-int(datanum)]
	print returndata.tier
	returntier = {"tier":(returndata.tier).encode("utf-8"),"price":returndata.rentfl.encode("utf-8")}
	with open("D:\codes\\allfile\chrome_fill_login\\readscript.js","w+") as f:
		f.write('console.log("'+'%c'+'%s", "color: #e40c0c;font-size: xx-large;")\n' % (returndata.tier).encode("utf-8"))
		f.write('document.getElementById("muban").click();\n')
		f.write('document.getElementById("blockshowname").value="%s"\n' % (returndata.tier).encode("utf-8"))
		f.write('document.getElementsByName("renttype")[1].checked = true\n')
		f.write('document.getElementById("price").value=%s\n' % returndata.rentfl.encode("utf-8"))
		f.write('document.getElementById("buildarea").value=%s\n' % returndata.housecf.encode("utf-8").split('㎡')[0])
		f.write('document.getElementsByName("room")[0].value=%s\n' % returndata.houseinfo.encode("utf-8").split("室")[0])
		f.write('document.getElementsByName("hall")[0].value=%s\n' % returndata.houseinfo.encode("utf-8").split("室")[1].split("厅")[0])
		f.write('document.getElementsByName("toilet")[0].value=%s\n' % returndata.houseinfo.encode("utf-8").split("室")[1].split("厅")[1][0])

		if int(returndata.housecf5.encode("utf-8").split("/")[0])==0:
			f.write('document.getElementsByName("floor")[0].value=%s\n' % "3")
		else:
			f.write('document.getElementsByName("floor")[0].value=%s\n' % returndata.housecf5.encode("utf-8").split("/")[0])

		if int(returndata.housecf5.encode("utf-8").split("/")[1].split("层")[0])==0:
			f.write('document.getElementsByName("totalfloor")[0].value=%s\n' % "7")
		else:
			f.write('document.getElementsByName("totalfloor")[0].value=%s\n' % returndata.housecf5.encode("utf-8").split("/")[1].split("层")[0])
		

		kkkk = '''document.getElementsByName("fitment")[0].value="精装"
document.getElementsByName("forward")[0].value="南北通透"
document.getElementsByName("payment")[0].value="月付"
document.getElementsByName("rentroom")[0].value="次卧"
document.getElementById("jsAllcheckbox").checked=true

for (var i = 10 - 1; i >= 0; i--) {
document.getElementsByName("equipment[]")[i].checked=true
};\n
'''

		f.write(kkkk)
		title = (returndata.tier).encode("utf-8")+"环境优雅 闹中取静 交通便利 温馨舒适 阳光充足"
		f.write('document.getElementById("address").value="%s"\n' % title)
		
		selectpic = '''
setTimeout(function(){
for (var i = 1; i < 5; i++) {
document.getElementsByClassName("btn")[i].click()
}
},1000)
''' 
		f.write(selectpic)
		#拿取小区地址自动填入
		idjavascript = '''
function myTimer() {
var xmlhttp;
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        
        console.log(JSON.parse(xmlhttp.responseText))
        document.getElementById("district").value = JSON.parse(xmlhttp.responseText).district
        document.getElementById("street").value = JSON.parse(xmlhttp.responseText).streetname
        document.getElementById("blockaddress").value = JSON.parse(xmlhttp.responseText).address
        document.getElementById("blockshowname").value=JSON.parse(xmlhttp.responseText).blockname
        window.scroll(100,1650);
    } 
}
xmlhttp.open("GET", "http://nj.zsb.house365.com/ajax/find_block_detail/?id=%s" , true);

xmlhttp.send();

};
myTimer();\n

document.onkeydown=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];
            
   // if(e && e.keyCode==13){ // enter 键
   if(e && e.keyCode==32){ // space 键
       document.getElementById("jsBtnSubmit_rent").click();
  }
}; 

		''' % (str(getid((returndata.tier).encode("utf-8"))))

		f.write(idjavascript)
		
		# content = '''
		# 嗨住的优质房源
		# 【便利的交通&成熟的配套】
		# 超市，银行，医院，学校，便利店，菜市场，购物广场应有尽有,安全性高、位置安静、靠近花园、采光什么都非常好
		# 【装修精致\配套成熟的整租房源】

		# 厨房、卫生间、热水器、空调、WIFI,设备齐全，拎包就能入住,还有送车位的哦~
		# 【有趣善良的合租室友】
		# 那些直播里的萌妹纸、那些陆家嘴的金融GG、那些一身正气的程序员，可能就是你隔壁的室友~那些合租的小伙伴都是素质住户
		# 【品质小区】
		# 小区都处于繁华地段、房型正、佳、环境非常优美、都是一些次新小区
		# 嗨住的优质服务
		# * 无任何中介费
		# 嗨住房源实地勘察，保证嗨住租房平台房源可租信息实时可靠
		# * 房源广（7x24不断更新中）
		# 上海房源48396、北京16411、杭州23495、南京12055
		# * 直呼房东
		# 租客可通过嗨住租房上公开的房东电话，直接呼叫联系房东，询问房屋信息、预约看 房、达成交易。
		# * 免费预约
		# 租客可直接在嗨住租房平台提交对某套房的看房预约请求，嗨住顾问将免费为租客协调与房东的见面时间，与房东直接见面，达成交易。
		# * 租后服务
		# 嗨住还为租客提供了房租分期、室友征选、搬家维修等系列租后服务。
		# 更多房源欢迎致电4008180555(上海4008180555，杭州4008170019，南京4001606145）
		# 或
		# 至任意手机应用市场下载“嗨住租房”app


		# '''

		

	# return render(request,"home.html",{"tier":returntier})
	#解决AJAX跨域访问问题
	#No 'Access-Control-Allow-Origin' header
	response = HttpResponse(json.dumps(returntier))
	response["Access-Control-Allow-Origin"] = "*"
	response["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
	response["Access-Control-Max-Age"] = "1000"
	response["Access-Control-Allow-Headers"] = "*"
	return response