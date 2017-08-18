console.log("%c明发新城中心", "color: #e40c0c;font-size: xx-large;")
document.getElementById("muban").click();
document.getElementById("blockshowname").value="明发新城中心"
document.getElementsByName("renttype")[1].checked = true
document.getElementById("price").value=800
document.getElementById("buildarea").value=18
document.getElementsByName("room")[0].value=3
document.getElementsByName("hall")[0].value=1
document.getElementsByName("toilet")[0].value=1
document.getElementsByName("floor")[0].value=13
document.getElementsByName("totalfloor")[0].value=26
document.getElementsByName("fitment")[0].value="精装"
document.getElementsByName("forward")[0].value="南北通透"
document.getElementsByName("payment")[0].value="月付"
document.getElementById("jsAllcheckbox").checked=true

for (var i = 10 - 1; i >= 0; i--) {
document.getElementsByName("equipment[]")[i].checked=true
};

document.getElementsByName("rentroom")[0].value="次卧"
document.getElementById("address").value="明发新城中心环境优雅 闹中取静 交通便利 温馨舒适 阳光充足"

setTimeout(function(){
for (var i = 1; i < 5; i++) {
document.getElementsByClassName("btn")[i].click()
}
},1000)
