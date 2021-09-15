const footerBanner = document.querySelector(".footer-banner");
function onFooterBanner(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      footerBanner.classList.add("footer-banner-animate");
    }
  });
}

let options = {
  threshold: [0.8],
};

let observer = new IntersectionObserver(onFooterBanner, options);
observer.observe(footerBanner);
