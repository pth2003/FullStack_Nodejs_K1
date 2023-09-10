var backBtn = document.querySelector(".btn-back");

window.addEventListener("scroll", function () {
  var position = this.window.scrollY;
  if (position >= 60) {
    backBtn.classList.add("show");
  } else {
    backBtn.classList.remove("show");
  }
});

backBtn.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  window.scroll(0, 0);
});
