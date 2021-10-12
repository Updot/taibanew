const locations = document.querySelectorAll(".location");
const defaultLocation = document.querySelector(".default-location");
const addressDiv = document.querySelectorAll(".map1 .address");
const addresses = document.querySelectorAll(".address");
const defaultAddress = document.querySelector(".default-address");
console.log(window.outerWidth);
// if (window.outerWidth < 500) {
//   const addressDesk = document.querySelector(".default-address-desktop");
//   addressDesk.parentNode.removeChild(addressDesk);
// }
addresses.forEach((address) => console.log(address.dataset.locationName));

locations.forEach((location, i) => {
  location.addEventListener("click", (e) => {
    addresses.forEach((address) => address.classList.add("hide"));
    locations.forEach((newLocation) =>
      newLocation.classList.remove("map-color-active")
    );
    e.target.classList.add("map-color-active");
    addresses.forEach((address) => {
      if (address.dataset.locationName == location.dataset.locationName) {
        address.classList.remove("hide");
      }
    });
  });
  const joinTeamBtn = document.querySelector(".join-team-btn");
  const partnerUsBtn = document.querySelector(".partner-us-btn");
  const closePopup = document.querySelectorAll(".close-btn");
  const body = document.querySelector("body");
  const popup = document.querySelector(".popup");
  const joinPopup = document.querySelector(".join-popup");
  const partnerPopup = document.querySelector(".partner-popup");

  joinTeamBtn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("popup-hidden");
    closePopup[0].classList.remove("partner-close-popup");
    joinPopup.classList.remove("popup-hidden");
    body.style.overflowY = "hidden";
  });
  partnerUsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("popup-hidden");
    partnerPopup.classList.remove("popup-hidden");
    body.style.overflowY = "hidden";
  });
  closePopup.forEach((cp) => {
    cp.addEventListener("click", (e) => {
      e.preventDefault();
      popup.classList.add("popup-hidden");
      partnerPopup.classList.add("popup-hidden");
      joinPopup.classList.add("popup-hidden");
      cp.classList.add("partner-close-popup");
      body.style.overflowY = "scroll";
    });
  });
});
