//勾选为0的房源
    var k = 0;
    for (var i = document.getElementsByClassName("num").length - 1; i >= 0; i--) {
    if(k == 20){break;}
        if (Number(document.getElementsByClassName("num")[i].innerText.split("/")[0])==0 &&
            Number(document.getElementsByClassName("num")[i].innerText.split("/")[1])==0) {
            document.getElementsByClassName("num")[i].parentNode.childNodes[1].childNodes[1].checked = true;
            k = k + 1;
            console.log(k);
            
        }
        
    }

    //点击批量取消
    document.getElementById("undoshow").click();

    //点击确定
    document.getElementsByClassName("ui-button ui-button-medium ui-button-positive")[1].click();
    //  //点击翻页
    // document.getElementsByClassName("ui-multipage-next-active")[0].click();

    
    //翻页绑定左右按键

    document.onkeydown = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];  
        if (e && e.keyCode == 39) {
            document.getElementsByClassName("ui-multipage-next-active")[0].click();
        } else if (e && e.keyCode == 37) {
            document.getElementsByClassName("ui-multipage-pre-active")[0].click();
        }
    };