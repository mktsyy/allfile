var phone = new Array();

function showHint(sendphone) {
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
            console.log("success")
        }
    }
    xmlhttp.open("GET", "http://localhost:8000/get10086phone/?a="+sendphone, true);
    xmlhttp.send();
    
}

for (var i = document.getElementById("Searchresult_onemonthdetail001").childNodes.length - 1; i >= 0; i--) {
    if (document.getElementById("Searchresult_onemonthdetail001").childNodes[i].childNodes[2].innerHTML == "被叫") {

    // phone.push(document.getElementById("Searchresult_onemonthdetail001").childNodes[i].children[3].innerHTML);
    showHint(document.getElementById("Searchresult_onemonthdetail001").childNodes[i].children[3].innerHTML);
    }
}
// showHint(phone.length);