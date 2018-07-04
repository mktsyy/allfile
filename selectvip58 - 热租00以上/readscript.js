//选取蓝色优先推送对象(热租)
// 页面的点击数量是用的延迟加载，用window.load不行，最后智能用延时来实现
setTimeout(function(){
        for (var i = document.getElementsByClassName("ck").length - 1; i >= 0; i--) {
            if (document.getElementsByClassName("ck")[i].parentNode.parentNode.childNodes[13].childNodes[5].attributes[1].value == 'opt-link batchproms') {
                // document.getElementsByClassName("ck")[i].checked = true;
                console.log(i)

                // 判断总点击是否为0
                if (document.getElementsByClassName("num")[i].innerText.split("/")[1] !== "0" &&
                    document.getElementsByClassName("num")[i].innerText.split("/")[1] !== "-" &&
                    document.getElementsByClassName("num")[i].innerText.split("/")[1] !== "1") {
                    console.log("ok")
                    // 判断昨日点击是否为0
                    // if (Number(document.getElementsByClassName("num")[i].innerText.split("/")[0])!= 0) {

                    document.getElementsByClassName("ck")[i].parentNode.parentNode.childNodes[13].childNodes[5].click();
                    document.getElementsByClassName("ui-button ui-button-medium ui-button-positive")[0].click();
                    document.getElementsByClassName("ui-button ui-button-medium ui-button-positive")[0].click();
                    // }
                }

            }

        }

},1000)
   









//点击批量推送
//  setTimeout(function(){
// document.getElementById("batchprom").click();
// //document.getElementsByClassName("btn-ok ui-button ui-button-positive ui-button-medium")[0].click();
//  },500)
//  setTimeout(function(){
// document.getElementsByClassName("btn-ok ui-button ui-button-positive ui-button-medium")[0].click();
//  },800)
//   setTimeout(function(){
// document.getElementsByClassName("ui-button ui-button-medium ui-button-positive")[0].click();
//  },1500)


//   //自动翻页

  //    setTimeout(function(){
  // document.getElementsByClassName("ui-multipage-next-active")[0].click();
  //  },2000)


//翻页绑定左右按键

document.onkeydown = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];  
    if (e && e.keyCode == 39) {
        document.getElementsByClassName("ui-multipage-next-active")[0].click();
    } else if (e && e.keyCode == 37) {
        document.getElementsByClassName("ui-multipage-pre-active")[0].click();
    }
};