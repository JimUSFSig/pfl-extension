import browser from 'webextension-polyfill';

document.addEventListener("DOMContentLoaded", () => {

  async function getCurrentTabTitle(): Promise<string | undefined> {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    if (tabs.length > 0 && tabs[0].title) {
      return tabs[0].title;
    }
    return undefined;
  }

  getCurrentTabTitle().then((title) => {
    const titleElement = document.getElementById("page-title");
    if (titleElement) {
      titleElement.textContent = title ?? "Unknown title";
    }
  });

getCurrentTabTitle().then(title => {
  console.log("Current tab title:", title);
});

  // const loginButton = document.getElementById("login") as HTMLButtonElement;
  // const domainInput = document.getElementById("pfl-domain") as HTMLInputElement;


  // loginButton.addEventListener("click", () => {
  //   const domain = domainInput.value;
  //   chrome.permissions.request({ origins: [domain] }, (granted) => {
  //     if (granted) {
  //       await browser.runtime.sendMessage({ type: "checkLogin", lmsUrl: domain }, (response) => {
  //         if (response.loggedIn) {
  //           alert("You're logged in!");
  //         } else {
  //           window.open(domain + "/login", "_blank");
  //         }
  //       });
  //     } else {
  //       alert("Permission denied for domain: " + domain);
  //     }
  //   });
  // });
});