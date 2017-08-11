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
            console.log(JSON.parse(xmlhttp.responseText))
            
        }
    }
    xmlhttp.open("GET", "http://vip.anjuke.com/ajax/community/search/?q=" + "三林新村", true);
    xmlhttp.send();
    
}

showHint();