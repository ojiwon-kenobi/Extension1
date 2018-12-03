//content.js : a JavaScript file that runs in the context of web pages.

alert("Hello, World :)")

chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse) {
        if (request.message === "clicked_browser_action") {

            var firstHref = $("a[href^= 'http']").eq(0).attr("href");
            console.log(firstHref);
            //send URL to background.js
            chrome.runtime.sendMessage({ "message": "open_new_tab", "url": firstHref});
        }
    }
);


