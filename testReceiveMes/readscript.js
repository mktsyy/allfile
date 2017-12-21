
// For simple requests:
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (sender.id == blacklistedExtension)
      return;  // don't allow this extension access
    else if (request.getTargetData)
    	console.log("here")
      sendResponse({targetData: "targetData"});
    else if (request.activateLasers) {
      var success = activateLasers();
      sendResponse({activateLasers: success});
    }
  });
 