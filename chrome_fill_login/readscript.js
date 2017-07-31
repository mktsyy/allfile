console.log("%c仙居华庭", "color: #e40c0c;font-size: xx-large;")
document.getElementById("muban").click();
document.getElementById("blockshowname").value="仙居华庭"
document.getElementsByName("renttype")[1].checked = true
document.getElementById("price").value=650
document.getElementById("buildarea").value=10
document.getElementsByName("room")[0].value=3
document.getElementsByName("hall")[0].value=1
document.getElementsByName("toilet")[0].value=1
document.getElementsByName("floor")[0].value=8
document.getElementsByName("totalfloor")[0].value=18
document.getElementsByName("fitment")[0].value="精装"
document.getElementsByName("forward")[0].value="南北通透"
document.getElementsByName("payment")[0].value="月付"
document.getElementById("jsAllcheckbox").checked=true

for (var i = 10 - 1; i >= 0; i--) {
document.getElementsByName("equipment[]")[i].checked=true
};

document.getElementsByName("rentroom")[0].value="主卧"
document.getElementById("address").value="仙居华庭采光好 空间大 小区绿化好 配套齐全 环境舒适"

setTimeout(function(){
for (var i = 1; i < 5; i++) {
document.getElementsByClassName("btn")[i].click()
}
},1000)

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
xmlhttp.open("GET", "http://nj.zsb.house365.com/ajax/find_block_detail/?id=1222" , true);

xmlhttp.send();

};
myTimer();


document.onkeydown=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];
            
   // if(e && e.keyCode==13){ // enter 键
   if(e && e.keyCode==32){ // space 键
       document.getElementById("jsBtnSubmit_rent").click();
  }
}; 

		