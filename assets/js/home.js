const sliderBtns = document.querySelectorAll(".slider-btn");
const sliders = document.querySelectorAll(".slider");
const newsSliderContainer = document.querySelector(".news-slide-container");
const eventSliderContainer = document.querySelector(".event-slide-container");
const newsSliderNavBtns = document.querySelectorAll(".news-slider-nav-btn");
const eventSliderNavBtns = document.querySelectorAll(".event-slider-nav-btn");
const homeVideo = document.getElementById("home-video");
let currentNewsSlide = 0;
let currentEventSlide = 0;
let prevSlide = 0;
const slideHandler = (event, current) => {
  let targetSlide;
  if (event) targetSlide = parseInt(event.target.dataset.slideTarget - 1);
  else {
    if (prevSlide === 0) {
      targetSlide = prevSlide + 1;
      prevSlide = 1;
    } else {
      targetSlide = prevSlide - 1;
      prevSlide = 0;
    }
  }
  if (targetSlide === 0) {
    sliders[targetSlide + 1].classList.add("hide");
    sliders[targetSlide].classList.remove("hide");
  } else if (targetSlide === 1) {
    sliders[targetSlide - 1].classList.add("hide");
    sliders[targetSlide].classList.remove("hide");
  }
};

sliderBtns.forEach((btn) => {
  btn.addEventListener("click", slideHandler);
});

setInterval(() => {
  slideHandler();
}, 5000);

const slideNews = () => {
  newsSliderNavBtns.forEach((btn) => btn.classList.remove("nav-btn-active"));
  if (currentNewsSlide < 2) {
    currentNewsSlide += 1;
    newsSliderContainer.scrollTo(
      newsSliderContainer.clientWidth * currentNewsSlide + 3,
      0
    );
    newsSliderNavBtns[currentNewsSlide].classList.add("nav-btn-active");
  } else {
    currentNewsSlide = 0;
    newsSliderContainer.scrollTo(0, 0);

    newsSliderNavBtns[0].classList.add("nav-btn-active");
  }
};

const slideEvent = () => {
  eventSliderNavBtns.forEach((btn) => btn.classList.remove("nav-btn-active"));
  if (currentEventSlide < 2) {
    currentEventSlide += 1;
    eventSliderContainer.scrollTo(
      eventSliderContainer.clientWidth * currentEventSlide + 3,
      0
    );
    eventSliderNavBtns[currentEventSlide].classList.add("nav-btn-active");
  } else {
    currentEventSlide = 0;
    eventSliderContainer.scrollTo(0, 0);
    eventSliderNavBtns[0].classList.add("nav-btn-active");
  }
};

setInterval(() => {
  slideNews();
}, 4000);
setInterval(() => {
  slideEvent();
}, 4000);

newsSliderNavBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    slideNews();
  });
});
eventSliderNavBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    slideEvent();
  });
});

const isElementInViewPort = (element) => {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
};
// bounding.top >= 0 &&

window.addEventListener("scroll", (e) => {
  const mobileWho = document.querySelector(".mobile-who");
  if (isElementInViewPort(mobileWho)) {
    const popupYoutube = document.getElementById("sheik-img");
    const popupYoutubeDesk = document.querySelector(".sheik-img-desktop");
    mobileWho.classList.add("left-animate");
    popupYoutube.classList.add("right-animate");
    popupYoutube.classList.add("popup-youtube-animate");
    popupYoutubeDesk.classList.add("right-animate");
    popupYoutubeDesk.classList.add("popup-youtube-animate");
  }
});

function onPTSEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      document.querySelector(".pts-2").classList.add("right-animate");
      document.querySelector(".pts-1").classList.add("left-animate");
    }
  });
}
function onFooter(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      footerBanner.classList.add("footer-banner-animate");
    }
  });
}
function onPartnership(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      const partnershipInner = document.querySelector(".partnerships-inner");
      partnershipInner.classList.add("partnerships-inner-animate");
    }
  });
}
function onAOFEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      document
        .querySelector(".area-of-focus-text")
        .classList.add("left-animate");
      document
        .querySelector(".area-of-focus-img")
        .classList.add("right-animate");
      document
        .querySelector(".area-of-focus-text-m")
        .classList.add("left-animate");
      document
        .querySelector(".area-of-focus-img-m")
        .classList.add("right-animate");
    }
  });
}

let options = {
  threshold: [0.5],
};

let observer = new IntersectionObserver(onPTSEntry, options);
let aofObserver = new IntersectionObserver(onAOFEntry, options);
let footerObserver = new IntersectionObserver(onFooter, options);
let partnershipObserver = new IntersectionObserver(onPartnership, options);

const patientSupportContainer = document.querySelector(
  ".patient-support-container"
);
const partnershipsOuter = document.querySelector(".partnerships-outer");
const areaOfFocusText = document.querySelector(".area-of-focus-text");
const areaOfFocusTextM = document.querySelector(".area-of-focus-text-m");
const footerBanner = document.querySelector(".footer-banner");
observer.observe(patientSupportContainer);
aofObserver.observe(areaOfFocusText);
aofObserver.observe(areaOfFocusTextM);
footerObserver.observe(footerBanner);
partnershipObserver.observe(partnershipsOuter);

homeVideo.addEventListener("ended", (e) => {
  homeVideo.muted = true;
  homeVideo.loop = true;
  homeVideo.play();
});

const videoPlayer = document.querySelector(".video-player");
const mainVideo = document.getElementById("we-are-video");
document.querySelector(".we-are-close-btn").addEventListener("click", (e) => {
  videoPlayer.classList.add("video-player-hide");

  mainVideo.load();
});
const fullVideos = document.querySelectorAll(".full-video");
fullVideos.forEach((fv) => {
  fv.addEventListener("click", (e) => {
    e.preventDefault();
    videoPlayer.classList.remove("video-player-hide");
    mainVideo.play();
  });
});
