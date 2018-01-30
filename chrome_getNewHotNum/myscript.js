if (document.getElementsByClassName("ui-multipage-current")[0].innerText == "1") {
localStorage.setItem("count",0);
localStorage.setItem("latest",escape(document.getElementsByClassName("date")[1].innerText.split('：')[1].split(" ")[0]))
}



var c = 0
for (var i = document.getElementsByClassName("date").length - 1; i >= 0; i--) {
    var part = escape(document.getElementsByClassName("date")[i].innerText.split('：')[1].split(" ")[0]);
    if (part.indexOf(localStorage.getItem("latest")) >= 0) {
        //console.log(unescape(part))
        localStorage.setItem("count",Number(localStorage.getItem("count"))+1);
        c = c + 1;
        // console.log(c);
    }
    //统计好后翻页
    if (c == 20) {
document.getElementsByClassName("ui-multipage-next-active")[0].click();
    }
}
console.log(localStorage.getItem("count"))
