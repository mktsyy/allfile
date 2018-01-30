//勾选全部需要取消的
document.getElementById("ckAll").click();
//点击批量取消推送
document.getElementById("cancelpro");


//翻页绑定左右按键

document.onkeydown = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 39) {
        document.getElementsByClassName("ui-multipage-next-active")[0].click();
    } else if (e && e.keyCode == 37) {
        document.getElementsByClassName("ui-multipage-pre-active")[0].click();
    }
};