var btn = document.querySelector(".btn");
var modalBox = document.querySelector(".modal-box");
var modalClose = document.querySelector(".close");
var overlay = document.querySelector(".overlay");
btn.addEventListener("click", function () {
  modalBox.classList.add("show");
  btn.classList.add("hidden");
});

modalClose.addEventListener("click", function () {
  modalBox.classList.remove("show");
  btn.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  modalBox.classList.remove("show");
  btn.classList.remove("hidden");
});
