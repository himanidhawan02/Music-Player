// Toggle Theme
const themeEle = document.querySelector(".change-theme");
const themeButtonEle = document.querySelector(".slider");
const themeSwitch = document.querySelector("#theme-switch");
const bodyTag = document.querySelector("body");
const filter = document.querySelector("#filter");
const card = document.querySelector("#card");

themeEle.textContent = "Dark";

themeButtonEle.addEventListener("change", () => {
  // We need to display Light theme on the window
  if (themeEle.textContent === "Light") {
    themeEle.textContent = "Dark";
    themeSwitch.style.backgroundColor = "rgb(176, 176, 176)";
    bodyTag.className = "light-theme";
  }
  // We need to display Dark theme on the window
  else {
    themeEle.textContent = "Light";
    themeSwitch.style.backgroundColor = "rgb(5, 173, 240)";
    bodyTag.className = "dark-theme";
  }
});
