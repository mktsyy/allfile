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
    xmlhttp.open("GET", "http://localhost:8000/get10086phone/?a="+sendphone.length, true);
    xmlhttp.send();
    
}

for (var i = document.getElementsByClassName("ued-table mgt-20 ued-loading")["0"].children[1].children.length - 1; i >= 0; i--) {
    if (document.getElementsByClassName("ued-table mgt-20 ued-loading")["0"].children[1].children[i].children[2].innerHTML == "被叫") {

    phone.push(document.getElementsByClassName("ued-table mgt-20 ued-loading")["0"].children[1].children[i].children[3].innerHTML);

    }
    showHint(phone.length);
}