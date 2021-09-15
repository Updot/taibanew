const accordion = document.querySelectorAll('.collapsible-info .box .label');

accordion.forEach(box => {
  box.addEventListener('click', (e) => {
    const target = e.target;
    target.classList.toggle('active');
  })
})