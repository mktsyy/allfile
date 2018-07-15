// //发送后台发布成功房源数目
// var _alert =window.alert;
// window.alert = function(){

//     //把字符串分割便于发送到web后端进行处理
//     var aa = arguments[0].split("成功发布")[1].split("套")[0];
//     //区域值传递到后台进行处理
//     var region = document.getElementsByName("region")[0].value;

//     console.log(aa);

//     function showHint() {
//         var xmlhttp;

//         if (window.XMLHttpRequest) {
//             // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//             xmlhttp = new XMLHttpRequest();
//         } else {
//             // IE6, IE5 浏览器执行代码
//             xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//         }
//         xmlhttp.onreadystatechange = function() {
//             if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//                 // var value = json.parse(xmlhttp.responseText)
//                 alert(xmlhttp.responseText);
//             }
//         }
//         xmlhttp.open("GET", "http://127.0.0.1:8000/HZadmin/?HZalert=" + aa + "&region=" + region, true);
//         xmlhttp.send();
        
//     }

//     showHint();

//     // _alert(argu ments[0]);
// }




            
            window.onload = function() {

                function submitEdit(obj) {
                    console.log("OKOKOK")
                }
            }
            
            // $(window).load(function(){
            //     alert("jquery===》window load" );
            // })
            
            // $(document).ready(function () {
            //     alert("jquery====》document ready");
            // });
            
            // $(function(){
            //     alert("jquery====》document onload");
            // });
            
            // function aaa(){
            //     alert("静态标签====》onload");
            // }
     
 