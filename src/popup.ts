document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login") as HTMLButtonElement;
  const domainInput = document.getElementById("lms-domain") as HTMLInputElement;

  loginButton.addEventListener("click", () => {
    const domain = domainInput.value;
    chrome.permissions.request({ origins: [domain] }, (granted) => {
      if (granted) {
        chrome.runtime.sendMessage({ type: "checkLogin", lmsUrl: domain }, (response) => {
          if (response.loggedIn) {
            alert("You're logged in!");
          } else {
            window.open(domain + "/login", "_blank");
          }
        });
      } else {
        alert("Permission denied for domain: " + domain);
      }
    });
  });
});