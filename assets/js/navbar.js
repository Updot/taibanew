const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".nav-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");
navBtn.addEventListener("click", (e) => {
  nav.classList.add("nav-show");
});
navCloseBtn.addEventListener("click", (e) => {
  nav.classList.remove("nav-show");
});
