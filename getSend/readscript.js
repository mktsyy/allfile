try{

var account = document.getElementById("username_new").value;

function showHint1(account=0,sending=0,stillSend=0) {
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
            alert("tier");
        }
    }
    xmlhttp.open("GET", "http://localhost:8000/getVip58Send/?sending=" + sending + "&stillSend=" + stillSend + "&account=" + account , true);
    xmlhttp.send();
    
}


	
showHint1(account,sending,stillSend);
}
catch(err){
	
var sending = document.getElementsByClassName("ui-info")[0].childNodes[1].childNodes[3].childNodes[1].innerText.split("：")[1].split("（")[0];
var stillSend = document.getElementsByClassName("ui-info")[0].childNodes[1].childNodes[3].childNodes[3].innerText.split("：")[1];

function showHint(account=0,sending=0,stillSend=0) {
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
            alert("tier");
        }
    }
    xmlhttp.open("GET", "http://localhost:8000/getVip58Send/?sending=" + sending + "&stillSend=" + stillSend + "&account=" + account , true);
    xmlhttp.send();
    
}


	
showHint(account,sending,stillSend);
}

