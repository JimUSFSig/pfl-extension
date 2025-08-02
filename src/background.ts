importScripts('browser-polyfill.min.js');

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "checkLogin") {
    chrome.cookies.get({ url: message.lmsUrl, name: "_LOGIN" }, (cookie) => {
      sendResponse({ loggedIn: !!cookie });
    });
    return true; // Needed to allow async sendResponse
  }
});