//选取蓝色优先推送对象

for (var i = document.getElementsByClassName("ck").length - 1; i >= 0; i--) {
    if (document.getElementsByClassName("ck")[i].parentNode.parentNode.childNodes[11].childNodes[3].attributes[1].value == 'opt-link batchproyx') {
        document.getElementsByClassName("ck")[i].checked = true;
    }

};

//点击批量推送
 setTimeout(function(){
document.getElementById("batchprom").click();
//document.getElementsByClassName("btn-ok ui-button ui-button-positive ui-button-medium")[0].click();
 },500)
 setTimeout(function(){
document.getElementsByClassName("btn-ok ui-button ui-button-positive ui-button-medium")[0].click();
 },800)
  setTimeout(function(){
document.getElementsByClassName("ui-button ui-button-medium ui-button-positive")[0].click();
 },1500)


//翻页绑定左右按键

document.onkeydown = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 39) {
        document.getElementsByClassName("ui-multipage-next-active")[0].click();
    } else if (e && e.keyCode == 37) {
        document.getElementsByClassName("ui-multipage-pre-active")[0].click();
    }
};