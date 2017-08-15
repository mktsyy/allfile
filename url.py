# -*- coding: utf-8 -*-
# 


llll=1
with open("party.txt",'r') as f:

	with open("new.html",'a+') as g:
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

			##上海
			# i = str(llll)+'.<A HREF="http://waf.hizhu.com/shanghai/roomlist.html?come=zdy&key_self=1&key=%s#c=sh&logicSort=2&max=999999&min=0&housecount=71" target="_blank" >%s</A>' % (k,k)

			##南京
			i = str(llll)+'.<A HREF="http://waf.hizhu.com/nanjing/roomlist.html?come=zdy&key_self=1&key=%s#c=nj&logicSort=2&max=999999&min=0&housecount=71" target="_blank" >%s</A>' % (k,k)
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