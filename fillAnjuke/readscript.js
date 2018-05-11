
			

			document.getElementsByName("room")[0].value = 2 ;
			document.getElementsByName("hall")[0].value = 1 ;
			document.getElementsByName("bathroom")[0].value = 1 ;
			document.getElementsByName("roomarea")[0].value = 85 ;
			document.getElementsByName("rentprice")[0].value = 1200 ;

			
			//房屋类型
			document.getElementsByName("housetype")[0].options[0].selected = false;
			document.getElementsByName("housetype")[0].options[1].selected =true;
			//装修情况
			document.getElementsByName("housefit")[0].options[0].selected = false;
			document.getElementsByName("housefit")[0].options[3].selected =true;
			//房间朝向
			document.getElementsByName("roomorient")[0].options[0].selected = false;
			document.getElementsByName("roomorient")[0].options[9].selected =true;
			//付款方式
			document.getElementsByName("paymode")[0].options[0].selected = false;
			document.getElementsByName("paymode")[0].options[1].selected =true;
			//全选
			for (var i = document.getElementsByName("fitment[]").length - 1; i >= 0; i--) {
				document.getElementsByName("fitment[]")[i].click();
			};
			
			//选择模板
			document.getElementsByClassName("use-tpl ui-button ui-button-blue ui-button-micro")[0].click();
			
			setTimeout(function(){
			document.getElementsByName("roomtemplate")[0].click();

			//模版确认延迟点击
			document.getElementsByClassName("ui-button ui-button-positive ui-button-medium")[0].click();
			
			},100)

			
			document.getElementsByName("community_unite")[0].value = '桃源小区';

			function showHint() {
						    var xmlhttp;

						    if (window.XMLHttpRequest) {
						        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
						        xmlhttp = new XMLHttpRequest();
						    } else {
						        // IE6, IE5 浏览器执行代码
						        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
						    }
						    xmlhttp.onreadystatechange = function() {
						   			        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						   			            console.log(JSON.parse(xmlhttp.responseText)["data"][0]["name"]);
						   			            document.getElementsByName("communityAJK")[0].value = JSON.parse(xmlhttp.responseText)["data"][0]["name"];

						   			            	for (var i = document.getElementsByName("zoneAJK")[0].options.length - 1; i >= 0; i--) {
						   			            			                if (document.getElementsByName("zoneAJK")[0].options[i].text===JSON.parse(xmlhttp.responseText)["data"][0]["area_string"]){
						   			            			                    document.getElementsByName("zoneAJK")[0].options[0].selected = false;
						   			            			                    document.getElementsByName("zoneAJK")[0].options[i].selected = true;
						   			            			                    console.log(document.getElementsByName("zoneAJK")[0].options[i]);
						   			            			                    console.log(document.getElementsByName("zoneAJK")[0].value);
						   			            			                    showHint1(document.getElementsByName("zoneAJK")[0].value,JSON.parse(xmlhttp.responseText)["data"][0]["sub_area_string"]);
						   			            			                }
						   			            			            }

						   			           	// document.getElementsByClassName("ui-select-label")[0].innerText = JSON.parse(xmlhttp.responseText)["data"][0]["area_string"];
						   			           
						   			            // document.getElementsByClassName("ui-select-label")[1].innerText = JSON.parse(xmlhttp.responseText)["data"][0]["sub_area_string"];

						   			            document.getElementsByName("addressAJK")[0].value =JSON.parse(xmlhttp.responseText)["data"][0]["address"];

						   			            // document.getElementById("ajk_community_address").innerText = "地址："+ JSON.parse(xmlhttp.responseText)["data"][0]["area_string"]+" "
						   			            // +JSON.parse(xmlhttp.responseText)["data"][0]["sub_area_string"]+" "+JSON.parse(xmlhttp.responseText)["data"][0]["address"]

						   			        }
						   			    }
						    xmlhttp.open("GET", "http://vip.anjuke.com/ajax/community/search/?q=桃源小区", true);
						    xmlhttp.send();
						    
						}

						function showHint1(e,f) {
						    var xmlhttp;

						    if (window.XMLHttpRequest) {
						        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
						        xmlhttp = new XMLHttpRequest();
						    } else {
						        // IE6, IE5 浏览器执行代码
						        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
						    }
						    xmlhttp.onreadystatechange = function() {
						   			        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						   			            for (var i = JSON.parse(xmlhttp.responseText)["data"].length - 1; i >= 0; i--) {
						   			                if (JSON.parse(xmlhttp.responseText)["data"][i]["typeName"]==f){
						   			                    // document.getElementsByName("blockAJK")[0].options[0].selected = false;
						   			                    // document.getElementsByName("blockAJK")[0].options[i].selected = true;
								   			            console.log(JSON.parse(xmlhttp.responseText)["data"][i]["typeName"])
								   			            console.log(JSON.parse(xmlhttp.responseText)["data"][i]["typeId"])
								   			            document.getElementsByName("blockAJK")[0].value = JSON.parse(xmlhttp.responseText)["data"][i]["typeId"]
								   			            // console.log(document.getElementsByName("blockAJK")[0].options[i])
						   			                }
						   			            }
						   			        }
						   			    }
						    xmlhttp.open("GET", "http://vip.anjuke.com/ajax/house/hz_house?act=getBlocks&districtId="+e, true);
						    xmlhttp.send();
						    
						}
						//showHint();



		document.getElementsByName("flatshare")[0].value = 2;
document.getElementsByName("floor")[0].value = 3
document.getElementsByName("allFloor")[0].value = 6
document.getElementsByName("title")[0].value = "桃源小区南北通透，性价比高，采光好"

		if (document.getElementsByName("allFloor")[0].value > 7) {
			document.getElementsByName("lift")[0].checked = true;
		}
		else{
			document.getElementsByName("lift")[1].checked = true;
		}
		
document.getElementById("chooseWeb_2").checked = true;
setTimeout(function(){ document.getElementsByClassName("ui-button ui-button-positive ui-button-medium")[2].click(); },100);
  var isFirst = setTimeout(function(){history.go(0)},2000); 
   			 		 window.clearTimeout(isFirst);//去掉定时器 
if (document.getElementsByName("noCommission")[0].checked ==false)
{document.getElementsByName("noCommission")[0].click()};
setTimeout(function(){ document.getElementById("publish-rent-add").click(); },30000);
