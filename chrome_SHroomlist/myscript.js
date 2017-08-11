// setTimeout(function() {
//     document.getElementsByClassName("house_title")[0].childNodes[0].setAttribute("target", "");
     
// },3000)
// 

//在同一窗口打开房源信息
setInterval(function(){
    document.getElementsByClassName("house_title")[0].childNodes[0].setAttribute("target", "");
},500)

//自动价格排序
setTimeout(function() {
    document.getElementById("price_sort").click();
    document.getElementsByTagName("TITLE")[0].text = document.getElementsByClassName("house_title")[0].innerText.split("·")[1];
    

    setInterval(function(){
        document.getElementsByClassName("house_title")[0].childNodes[0].click();
    },2000)
    //点击选择链接，窗口自动关闭（自动点击不成功）
    // document.getElementsByClassName("house_title")[0].childNodes[0].onclick = function() {
    //     window.location.href = "about:blank";
    //     window.close();
    // }
    //改思路为设置链接为在当前页面打开
    // document.getElementsByClassName("house_title")[0].childNodes[0].setAttribute("target", "");
    

}, 2000)

