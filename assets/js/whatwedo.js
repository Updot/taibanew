const readMores = document.querySelectorAll(".read-more");
readMores.forEach((rd) => {
  rd.addEventListener("click", (e) => {
    const moreDiv = e.target.dataset.read;
    const moreTextdiv = document.getElementById(`${moreDiv}`);
    moreTextdiv.classList.toggle("hide");
    if (moreTextdiv.classList.contains("hide")) {
      e.target.innerText = "Read More";
    } else {
      e.target.innerText = "Read Less";
    }
  });
});
