
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


  // The ID of the extension we want to talk to.
  var laserExtensionId = "hfhnjlfokkooidcjnlmhmllfmlbmapeh ";

  // Make a simple request:
  chrome.runtime.sendMessage(laserExtensionId, {getTargetData: true},
  function(response) {
    // if (targetInRange(response.targetData))
    //   chrome.runtime.sendMessage(laserExtensionId, {activateLasers: true});
    console.log(response.targetData)
  });
 