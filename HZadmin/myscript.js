//根据区域自动选择电话号码
// if (document.getElementById("ddl_region").value = 24) {  //徐汇
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 43) { //长宁
//     document.getElementById("accountDiv").childNodes[9].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 53) { //浦东
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) { //
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) {
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) {
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) {
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) {
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) {
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) {
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) {
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) {
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) {
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) {
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) {
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) {
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) {
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// } else if (document.getElementById("ddl_region").value = 24) {
//     document.getElementById("accountDiv").childNodes[3].childNodes[0].checked = true;
// }




//发送后台发布成功房源数目
var _alert =window.alert;
window.alert = function(){

    //把字符串分割便于发送到web后端进行处理
    var aa = arguments[0].split("成功发布")[1].split("套")[0];
    //区域值传递到后台进行处理
    var region = document.getElementsByName("region")[0].value;

    console.log(aa);

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
                // var value = json.parse(xmlhttp.responseText)
                alert(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", "http://127.0.0.1:8000/HZadmin/?HZalert=" + aa + "&region=" + region, true);
        xmlhttp.send();
        
    }

    showHint();

    // _alert(argu ments[0]);
}