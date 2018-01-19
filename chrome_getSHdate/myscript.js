// localStorage.setItem("tier",document.getElementsByClassName("tier")[0].childNodes[2].childNodes[11].innerHTML);
// localStorage.setItem("house-info",document.getElementsByClassName("house-info")[0].childNodes[3].innerHTML);
// localStorage.setItem("house-mesg-main cf",document.getElementsByClassName("house-mesg-main cf")[0].childNodes[3].innerHTML);
// localStorage.setItem("rent fl",document.getElementsByClassName("rent fl")[0].innerHTML.split("<span>")[0]);
// localStorage.setItem("house-mesg-main cf5",document.getElementsByClassName("house-mesg-main cf")[0].childNodes[5].innerHTML);

// //自动价格排序
// setTimeout(function() {
//     document.getElementById("price_sort").click();
//     document.getElementsByTagName("TITLE")[0].text = document.getElementsByClassName("house_title")[0].innerText.split("·")[1];

// }, 2000)



//   //点击选择链接，窗口自动关闭
//     var eventOne = function(){ 
//      window.close();
//     }
//     var firstElement = document.getElementsByClassName("house_title")[0].childNodes[0];
//     firstElement.addEventListener("click",eventOne);

//在同一窗口打开房源信息
// setInterval(function(){
//     document.getElementsByClassName("house_title")[0].childNodes[0].setAttribute("target", "");
// },500)

//小区名字
var tier = document.getElementById("mess").childNodes[1].innerHTML.split("·")[1].split("&nbsp;")[1];
document.getElementsByTagName("TITLE")[0].text = tier;

//户型
// var houseinfo = document.getElementsByClassName("house_mes")[0].childNodes[2].childNodes[1].innerHTML;
for (var i = document.getElementsByClassName("house_mes")[0].childNodes.length - 1; i >= 0; i--) {
    var part = escape(document.getElementsByClassName("house_mes")[0].childNodes[i].innerText);
    var c = escape("户型")
    if (part.indexOf(c) >= 0) {
        var houseinfo = unescape(part).split("户型")[1];
    }
}
//面积
var housecf = document.getElementsByClassName("price cf")[0].childNodes[2].innerHTML;
//价格
var rentfl = document.getElementsByClassName("price cf")[0].childNodes[0].childNodes[0].innerHTML;
//楼层
//
for (var i = document.getElementsByClassName("house_mes")[0].childNodes.length - 1; i >= 0; i--) {
    var part = escape(document.getElementsByClassName("house_mes")[0].childNodes[i].innerText);
    var c = escape("楼层")
    if (part.indexOf(c) > 0) {
        var housecf5 = document.getElementsByClassName("house_mes")[0].childNodes[3].childNodes[1].innerHTML;
        break;
        console.log(housecf5);
    } else {
        var housecf5 = "8/18层";
        console.log(housecf5);
    }
}





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
            alert("tier");
        }
    }
    xmlhttp.open("GET", "http://localhost:8000/fill/?a=" + tier + "&b=" + houseinfo + "&c=" + housecf + "&d=" + rentfl + "&e=" + housecf5, true);
    xmlhttp.send();
    
}

showHint();

//自动关闭窗口
setTimeout(function() {
    window.close();
}, 1000)
// alert("done!");
