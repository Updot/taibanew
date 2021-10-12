const ANIMATION_INTERVAL_IN_MS = 2000;
window.onload = function () {
  let intervalTimeOut, scrollTimeOut;
  function animateDiv() {
    const currentTop = document.querySelector(".z-index-top");
    const currentBelow = document.querySelector(".z-index-below");
    const rightDiv = document.querySelector(".z-index-top .right");
    const leftDiv = document.querySelector(".z-index-top .left");
    const overlayImage = document.querySelector(".z-index-top .left img");
    const topCircle = document.querySelector(".z-index-top .circle");
    const belowCircle = document.querySelector(".z-index-below .circle");

    overlayImage.classList.remove("show");
    overlayImage.classList.add("hide");
    // // two
    // overlayImage.classList.remove("hide");
    // overlayImage.classList.add("show");

    topCircle.classList.remove("show");
    topCircle.classList.add("hide");
    belowCircle.classList.remove("hide");
    belowCircle.classList.add("show");
    // test trial1

    rightDiv.classList.add("right-animation");
    leftDiv.classList.add("left-animation");
    leftDiv.addEventListener("animationend", function () {
      rightDiv.classList.remove("right-animation");
      leftDiv.classList.remove("left-animation");

      currentTop.classList.remove("z-index-top");
      currentTop.classList.add("z-index-below");

      currentBelow.classList.remove("z-index-below");
      currentBelow.classList.add("z-index-top");
    });
  }
  function scrollHandler() {
    scrollTimeOut = setTimeout(() => {
      animateDiv();
      intervalTimeOut = setInterval(animateDiv, 4000);
    }, 40);
  }
  intervalTimeOut = setInterval(animateDiv, 4000);
  window.addEventListener("wheel", () => {
    clearInterval(intervalTimeOut);
    clearTimeout(scrollTimeOut);
    scrollHandler();
  });
};
