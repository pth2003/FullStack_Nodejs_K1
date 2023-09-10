var header = document.querySelector(".header");
var headerHeight = header.clientHeight;
var body = document.querySelector("body");
var currentY = 0;
var scrollType;
window.addEventListener("scroll", function () {
  var newPosition = this.window.scrollY;
  if (newPosition > currentY) {
    scrollType = "down";
  } else {
    scrollType = "up";
  }
  currentY = newPosition;

  if (newPosition >= headerHeight) {
    header.classList.add("fixed");
    body.style.paddingTop = `${headerHeight + 15}px`;
    position = newPosition;
  }
  if (scrollType === "up") {
    header.classList.remove("fixed");
    body.style.paddingTop = `0px`;
  }
});
// Scroll to section
var navItems = header.querySelectorAll(".menu li a");

navItems.forEach(function (navItem) {
  navItem.addEventListener("click", function (e) {
    e.preventDefault();
    var hash = this.getAttribute("href"); // tra ve id section
    var section = document.querySelector(hash);
    var sectionOffsetY = section.offsetTop;
    window.scroll(0, sectionOffsetY - headerHeight - 15);
  });
});
