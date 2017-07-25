if(document.getElementById('roomorder').value=='4'){
	for (var i = 10; i > 0; i--) {
	document.getElementsByName("rows_id")[i].checked = true
	document.getElementsByClassName("btn autoBtn btnCon")[3].click()
	document.getElementById("dialog_url2").click()
}
}