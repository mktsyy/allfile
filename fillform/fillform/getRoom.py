# -*- coding: utf-8 -*-

import requests
import grequests
import json 


##导入界面
from tkinter import *    #注意模块导入方式，否则代码会有差别

##Python 下载win32api 模块  终端输入“pip install pypiwin32”

import win32api, win32gui  
ct = win32api.GetConsoleTitle()  
hd = win32gui.FindWindow(0,ct)  
win32gui.ShowWindow(hd,0)


global NUM
NUM = 0
class App:
	
	def buttonListener1(self,event):

		global NUM
		root.title("房源信息-"+str(NUM))
		NUM = NUM + 1
		##拿取后端数据(见鬼，把localhost改为127.0.0.1，速度刷刷刷，这个也算长经验了)
		url = "http://127.0.0.1:8000/writeAnjukeDate/"+str(NUM)+"/"

		# headers={"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36 QQBrowser/3.9.3943.400",
		# 	'X-Requested-With': 'XMLHttpRequest'}

		response = requests.get(url)

		##异步请求(也不是异步的问题，貌似还是后端反应慢)
		# urls = [
		# "http://localhost:8000/writeAnjukeDate/"+str(NUM)+"/",
		# "http://localhost:8000/writeAnjukeDate/"+str(NUM+1)+"/"
		# ]
		# response = (grequests.get(u) for u in urls)
		# print (grequests.map(response))

		# print (json.loads(response.text))

		##设置数据显示
		var.set(str(json.loads(response.text)))
		# var.set(str(json.loads(response.text)['tier'])+"    "+str(json.loads(response.text)['price'])+"    "+str(json.loads(response.text)['housenum']))


	def buttonListener2(self,event):
		global NUM
		root.title("房源信息-"+str(NUM))
		NUM = NUM - 1

		if NUM < 0 :
			NUM = 0

		##拿取后端数据(见鬼，把localhost改为127.0.0.1，速度刷刷刷，这个也算长经验了)
		url = "http://127.0.0.1:8000/writeAnjukeDate/"+str(NUM)+"/"

		response = requests.get(url)

		##设置数据显示
		var.set(str(json.loads(response.text)))
	
	def __init__(self, master,var):
		#使用Frame增加一层容器
		# fm1 = Frame(master)
		# #Button是一种按钮组件，与Label类似，只是多出了响应点击的功能
		# Button(fm1, text='Top').pack(side=TOP, anchor=W, fill=X, expand=YES)
		# Button(fm1, text='Center').pack(side=TOP, anchor=W, fill=X, expand=YES)
		# Button(fm1, text='Bottom').pack(side=TOP, anchor=W, fill=X, expand=YES)
		# fm1.pack(side=LEFT, fill=BOTH, expand=YES)

		##初始化框体大小
		fm2 = Frame(master,width = 250,height=40)

		##加入事件绑定
		self.button1 = Button(fm2, text='Left')
		self.button1.pack(side=LEFT,  anchor=W, fill=X,expand=YES)
		# Button(fm2, text='This is the Center button').pack(side=LEFT)
		Label(master, textvariable = var,font = 100).pack(side=BOTTOM)    
		self.button2 = Button(fm2, text='Right')
		self.button2.pack(side=RIGHT,anchor=E, fill=X,expand=YES)   

		##使大小生效
		###http://effbot.org/tkinterbook/button.htm这里官方解释为don't shrink
		fm2.pack_propagate(0)
		##参数详见https://www.cnblogs.com/muziyunxuan/p/8268179.html
		fm2.pack(side=LEFT, ipadx=100,padx=10)

		# fm1 = Frame(master)
		
		# fm1.pack(side=BOTTOM, fill=BOTH, expand=YES)

		# ##拿取后端数据
		# url = "http://localhost:8000/writeAnjukeDate/0/"

		# response = requests.get(url)

		# # print (json.loads(response.text))

		# ##设置数据显示
		# var.set(str(json.loads(response.text)))

		##焦点为button1
		self.button1.focus_set()

		self.button1.bind("<ButtonRelease-1>",self.buttonListener1)
		self.button2.bind("<ButtonRelease-1>",self.buttonListener2)


root = Tk()
root.title("房源信息-"+str(NUM))
root.wm_attributes('-topmost',1)
var = StringVar()
display = App(root,var)


root.mainloop()
