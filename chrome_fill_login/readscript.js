console.log("%c万达西地.二街区", "color: #e40c0c;font-size: xx-large;")
document.getElementById("muban").click();
document.getElementById("blockshowname").value="万达西地.二街区"
document.getElementsByName("renttype")[1].checked = true
document.getElementById("price").value=750
document.getElementById("buildarea").value=10
document.getElementsByName("room")[0].value=6
document.getElementsByName("hall")[0].value=1
document.getElementsByName("toilet")[0].value=1
document.getElementsByName("floor")[0].value=8
document.getElementsByName("totalfloor")[0].value=18
document.getElementsByName("fitment")[0].value="精装"
document.getElementsByName("forward")[0].value="南北通透"
document.getElementsByName("payment")[0].value="月付"
document.getElementById("jsAllcheckbox").checked=true

for (var i = 10 - 1; i >= 0; i--) {
document.getElementsByName("equipment[]")[i].checked=true
};

document.getElementsByName("rentroom")[0].value="主卧"
document.getElementById("address").value="万达西地.二街区采光好 空间大 小区绿化好 配套齐全 环境舒适"

setTimeout(function(){
for (var i = 1; i < 5; i++) {
document.getElementsByClassName("btn")[i].click()
}
},1000)
