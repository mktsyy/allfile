
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello"){
        console.log("receive")
        sendResponse({farewell: "goodbye"});
    }
    else if(request.greeting =="inupdate"){
        sendResponse({farewell:"getUpdate"})
    } 
 });
 

