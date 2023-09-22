let timer = 0;
let second = 30;
const INTERVAL = 1000;
let isDisabled = true;
const countEl = document.querySelector(".count span");
const btn = document.querySelector(".btn");

const handleTimer = function (currentTime) {
  if (timer <= currentTime) {
    second--;
    countEl.innerText = second;
    timer = currentTime + INTERVAL;
  }
  if (second > 0) {
    requestAnimationFrame(handleTimer);
  }
  if (second === 0) {
    isDisabled = false;
    btn.removeAttribute("disabled");
  }
};

btn.addEventListener("click", function () {
  if (!isDisabled) {
    window.location.href = "https://fullstack.edu.vn/";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  window.requestAnimationFrame(handleTimer);
});
