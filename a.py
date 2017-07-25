
# -*- coding: utf-8 -*-


with open("id.html","r") as f:
	for i in f.readlines():
		if "明发新城中心" in i:
			print i.split('addlishi(')[1].split(')')[0]
			print i
			break

