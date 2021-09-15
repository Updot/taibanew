const leftText = document.querySelector(".ptns-left-text");
const rightImg = document.querySelector(".ptns-right-img");
const intro = document.querySelector(".intro");
function onIntro(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      leftText.classList.add("left-animate");
      rightImg.classList.add("right-animate");
    }
  });
}

let animateOptions = {
  threshold: [0.5],
};

let newObserver = new IntersectionObserver(onIntro, animateOptions);
newObserver.observe(leftText);
