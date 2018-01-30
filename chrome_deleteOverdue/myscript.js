//如果已翻页至最后一页
if (document.getElementsByClassName("ui-multipage-current")[0].nextSibling.nextSibling.attributes[0].textContent == "ui-multipage-next-disable") {

    //勾选批量删除
    document.getElementById("ckAll").checked = true;
    //勾选全部过期房源列表
for (var i = document.getElementsByClassName("ck").length - 1; i >= 0; i--) {
    document.getElementsByClassName("ck")[i].checked = true;
}
//点击取消批量推送(未写完)
// document.getElementById("cancelpro")
}
else {
    document.getElementsByClassName("ui-multipage-next-active")[0].click();
}
