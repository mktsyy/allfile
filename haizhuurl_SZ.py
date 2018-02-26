# -*- coding: utf-8 -*-

import requests
import os
import time
import urllib2





llll=1
with open("party.txt",'r') as f:

	with open("new_SZ.html",'a+') as g:
		htmlhead='''
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<script type="text/javascript">
		function openurl(num){
			// alert("here")
			i = 1
			do{
				document.getElementsByTagName("a")[num-i].click();
				document.getElementsByTagName("a")[num-i].style.color="#ff0000";
				i++;
			} while(i<11)
		}
			</script>
		</head>
		<body>
		'''

		
		g.write(htmlhead)

		for k in f.readlines():
			print k
			#python 代码换行
			url ="http://www.hizhu.com/Home/House/getsearchekey.html?city_code=001010013&keyword=%s" %  urllib2.quote(k.split("\n")[0])
			headers = {'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'}
			data = {'city_code':"001010013", 'keyword':urllib2.quote(k.split("\n")[0])}
			# print url

			##拿取小区id
			res = requests.get(url,headers=headers,timeout=2,stream=True)
			# print res.text
			if res.status_code == 200:
				partyid = eval(res.text)['data'][0]['id']
				# print partyid
			

			if partyid:
				##拼接小区搜索链接
				newurl = "http://www.hizhu.com/suzhou/sqlist1/a0/b0/c0/d0/e0/f0/g0/h0/?" \
				 "key_self=2&key=%s&search_id=%s&type_no=0&sort=2" \
				 % (urllib2.quote(k.split("\n")[0]), partyid)
				print newurl
				i = str(llll)+'.<A HREF="%s" target="_blank" >%s</A>' % (newurl,k.split("\n")[0])

				if llll % 10 == 0:
					button = '<button onclick="openurl(%s)">打开</button>' % str(llll)
					g.write(i+button+"<br>"+"\n")	
				# elif llll % 10 == 0:
				# 	g.write(i+"\n"+"<br>")

				else:
					g.write(i+"\n")
				llll+=1
	


		htmlend='''
		</body>
		</html>
		'''
		g.write(htmlend)

##测试需要多少时间才可以正常拿到id

# k = ("绿洲香润苑","南方新村","龙联小区","锦博苑")
# for i in k:
# 	url ="http://www.hizhu.com/Home/House/getsearchekey.html?" \
# 	"city_code=001009001&keyword=%s" % i
# 	print url

# 	##拿取小区id
# 	res = requests.get(url)
# 	# print res.status_code
# 	partyid = eval(res.text)['data'][0]['id']
# 	if partyid:
# 		print partyid

# with open("party.txt",'r') as f:
# 	for k in f.readlines():
# 		print k.split("\n")[0]