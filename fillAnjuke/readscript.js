
			

			document.getElementsByName("room")[0].value = 4 ;
			document.getElementsByName("hall")[0].value = 1 ;
			document.getElementsByName("bathroom")[0].value = 1 ;
			document.getElementsByName("roomarea")[0].value = 12 ;
			document.getElementsByName("rentprice")[0].value = 500 ;

			
			//房屋类型
			document.getElementsByName("housetype")[0].options[0].selected = false;
			document.getElementsByName("housetype")[0].options[1].selected =true;
			//装修情况
			document.getElementsByName("housefit")[0].options[0].selected = false;
			document.getElementsByName("housefit")[0].options[4].selected =true;
			//房间朝向
			document.getElementsByName("roomorient")[0].options[0].selected = false;
			document.getElementsByName("roomorient")[0].options[9].selected =true;
			//付款方式
			document.getElementsByName("paymode")[0].options[0].selected = false;
			document.getElementsByName("paymode")[0].options[5].selected =true;
			//全选
			document.getElementsByName("fitment[]")[0].click();
			//选择模板
			document.getElementsByClassName("use-tpl ui-button ui-button-blue ui-button-micro")[0].click();
			setTimeout(function(){
			document.getElementsByName("roomtemplate")[0].click();
			document.getElementsByClassName("ui-button ui-button-positive ui-button-medium")[0].click();
			},100)

			
			document.getElementsByName("communityAJK")[0].value = '金穗花园';

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
						    xmlhttp.open("GET", "http://vip.anjuke.com/ajax/community/search/?q=金穗花园", true);
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



		document.getElementsByName("floor")[0].value = 25
document.getElementsByName("allFloor")[0].value = 34
document.getElementsByName("title")[0].value = "金穗花园干净整洁，正规成熟，随时看房，无中介"
document.getElementsByClassName("ui-button ui-button-positive ui-button-medium")[1].click();