// //勾选全部需要取消的
// document.getElementById("ckAll").click();
// //点击批量取消推送
// document.getElementById("cancelpro");


//遍历点击数,没有点击就勾选
for (var i = document.getElementsByClassName("num").length - 2; i >= 0; i--) {
	if (Number(document.getElementsByClassName("num")[i].innerText.split("/")[0])==0 &&
		(Number(document.getElementsByClassName("num")[i].innerText.split("/")[1])==1||
		Number(document.getElementsByClassName("num")[i].innerText.split("/")[1])==0)) {
		document.getElementsByClassName("num")[i].parentNode.childNodes[1].childNodes[1].checked = true;
	}
}

//点击取消推送
// document.getElementById("cancelpro").click();

//翻页绑定左右按键

document.onkeydown = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 39) {
        document.getElementsByClassName("ui-multipage-next-active")[0].click();
    } else if (e && e.keyCode == 37) {
        document.getElementsByClassName("ui-multipage-pre-active")[0].click();
    }
};