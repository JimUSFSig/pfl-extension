import browser from 'webextension-polyfill';
import './words.js';


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

  const urlInput = document.getElementById("urlInput") as HTMLInputElement;
  const saveButton = document.getElementById("saveButton") as HTMLButtonElement;
  const status = document.getElementById("status") as HTMLParagraphElement;

  document.addEventListener("DOMContentLoaded", async () => {
    // Load saved URL if it exists
    const result = await chrome.storage.sync.get("savedURL");
    if (result.savedURL) {
      urlInput.value = result.savedURL;
    }
  });

  saveButton.addEventListener("click", async () => {
    const url = urlInput.value.trim();
    if (!url) {
      status.textContent = "Please enter a valid URL.";
      return;
    }

    await chrome.storage.sync.set({ savedURL: url });
    status.textContent = "URL saved!";
  });

});