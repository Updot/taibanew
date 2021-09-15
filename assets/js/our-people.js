const daiTopLeft = document.querySelector(".dai-top-left");
const daiTopRight = document.querySelector(".dai-top-right");
const daiBottomLeft = document.querySelector(".dai-bottom-left");
const daiBottomRight = document.querySelector(".dai-bottom-right");
const daiTalk = document.querySelector(".dai-talk");
function onDaiTalk(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      daiTopLeft.classList.add("left-animate");
      daiTopRight.classList.add("right-animate");
      daiBottomLeft.classList.add("right-animate");
      daiBottomRight.classList.add("left-animate");
    }
  });
}

let animateOptions = {
  threshold: [0.8],
};

let newObserver = new IntersectionObserver(onDaiTalk, animateOptions);
newObserver.observe(daiTalk);
