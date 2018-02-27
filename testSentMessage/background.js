// 监听来自content-script的消息
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
// {
//     console.log('收到来自content-script的消息：');
//     console.log(request, sender, sendResponse);
//     // console.log(request);
//     // console.log(sender);
//     // console.log(sender.id);
//     // console.log(sendResponse);
//     sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
// });

// function sendMessageToContentScript(message, callback)
// {
//     chrome.tabs.query({active: true}, function(tabs)
//     {
//         // console.log(tabs);
//         chrome.tabs.sendMessage(tabs[0].id, message, function(response)
//         {
//         	console.log(tabs[0].id);
//             // if(callback) callback(response);
//             // console.log(response);
//         });
//     });
// }
// sendMessageToContentScript({cmd:'test', value:'你好，我是popup！'}, function(response)
// {
//     console.log('来自content的回复：'+response);
// });


chrome.tabs.onUpdated.addListener(
    function(tabId,info,tab){
        if(info.status=="complete")
            console.log("complete")
        chrome.tabs.sendMessage(tabId, {greeting: "inupdate"}, function(response) {
            console.log(response);
        });
    }
)


// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
// {
// 	console.log('收到来自content-script的消息：');
// 	console.log(request, sender, sendResponse);
// 	sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
// });

// function doInCurrentTab(tabCallback) {
//     chrome.tabs.query(
//         { currentWindow: true, active: true },
//         function (tabArray) { tabCallback(tabArray[0]); }
//     );
// }

// chrome.tabs.query(
// 	{ active: true, currentWindow: true }, 
// 	function(d) 
//     // { console.log(d[0].windowId); 
// 	{ console.log(d[0].id); 
// 	}
// 	)