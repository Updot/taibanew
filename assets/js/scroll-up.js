const scrollUpBtn = document.querySelector(".scroll-up");
scrollUpBtn.addEventListener("click", (e) => {
  console.log("here");
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 800) {
    scrollUpBtn.classList.remove("hide-btn");
  } else {
    scrollUpBtn.classList.add("hide-btn");
  }
});
