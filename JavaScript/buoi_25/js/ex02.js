var productActive = document.querySelector(".products .active");

// chon thanh phan ke tiep ngay sau no
// console.log(productActive.nextElementSibling);

// Chon thanh phan truoc no

// console.log(productActive.previousElementSibling);

var btnPrev = document.querySelector(".prev");
var btnNext = document.querySelector(".next");

var handleNext = function () {
  var nextElement = productActive.nextElementSibling;
  if (nextElement === null) {
    nextElement = document.querySelector(".products h2");
  }
  nextElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = nextElement;
};
btnNext.addEventListener("click", handleNext);

btnPrev.addEventListener("click", function () {
  var prevElement = productActive.previousElementSibling;
  if (prevElement === null) {
    prevElement = document.querySelector(".products h2:last-child");
  }
  prevElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = prevElement;
});
var products = document.querySelector(".products");

var isHover = false;

products.addEventListener("mouseover", function () {
  isHover = true;
});
products.addEventListener("mouseout", function () {
  isHover = false;
});
setInterval(function () {
  // check
  if (!isHover) {
    handleNext();
  }
}, 500);
