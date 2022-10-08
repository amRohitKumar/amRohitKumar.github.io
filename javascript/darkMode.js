const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.contains("light-theme")
    ? enableDarkMode()
    : enableLightMode();
});

function enableDarkMode() {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
  document.getElementsByClassName('theLine')[0].setAttribute('stroke', 'white');
  document.querySelectorAll('.ball').forEach(element => element.setAttribute('fill', 'white'));
  document.querySelectorAll('.textSvg').forEach(element => element.setAttribute('fill', 'black'));
  themeToggle.setAttribute("aria-label", "Switch to light theme");
  localStorage.setItem("mode", "dark");
}

function enableLightMode() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
  document.getElementsByClassName('theLine')[0].setAttribute('stroke', 'black');
  document.querySelectorAll('.ball').forEach(element => element.setAttribute('fill', 'black'));
  document.querySelectorAll('.textSvg').forEach(element => element.setAttribute('fill', 'white'));
  themeToggle.setAttribute("aria-label", "Switch to dark theme");
  localStorage.setItem("mode", "light");
}

function setThemePreference() {
  let res = localStorage.getItem("mode");
  if(res === "dark"){
    enableDarkMode();
  }else{
    enableLightMode();
  }
}
document.onload = setThemePreference();
