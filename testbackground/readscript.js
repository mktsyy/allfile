
//-------------------- badge演示 ------------------------//

chrome.browserAction.setBadgeText({text: '租'});
chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});

//拿取所有标签页			
  chrome.tabs.query({}, function (tabs) {
  //...
  console.log(tabs);
  console.log(tabs.length);
  for (var i = tabs.length - 1; i >= 0; i--) {
  	if (tabs[i].title =="chrome.windows.getAll_百度搜索"){
  		console.log(tabs[i].url);
  	}
  };
});


//   // The ID of the extension we want to talk to.
//   var laserExtensionId = "hfhnjlfokkooidcjnlmhmllfmlbmapeh";

// // Start a long-running conversation:
// var port = chrome.runtime.connect(laserExtensionId);
// port.postMessage({tab: "remycmd2"});


chrome.tabs.onUpdated.addListener(
    function(tabId,info,tab){
        if(info.status=="complete")
            console.log("complete")
        chrome.tabs.sendMessage(tabId, {greeting: "inupdate"}, function(response) {
            console.log(response);
        });
    }
)