var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var carouselNav = carousel.querySelector(".carousel-nav");

var navNext = carouselNav.querySelector(".next");
var navPrev = carouselNav.querySelector(".prev");

var carouselDots = document.querySelector(".carousel-dots");
// Buoc 1 : tinh toan so luong anh
var carouselItem = carouselInner.querySelectorAll(".item");
if (carouselItem.length) {
  // xu ly
  // Lay chieu rong cua 1 item
  var itemWidth = carouselInner.clientWidth; // tra ve chieu rong cua element
  // tinh toong cheiu rong
  var totalWidth = itemWidth * carouselItem.length;
  var paginationHTML = "";
  carouselItem.forEach(function (item, i) {
    item.style.width = `${itemWidth}px`;
    paginationHTML += `<span class="${
      i === 0 ? "active" : ""
    } data-index="${i}></span>`;
  });
  carouselDots.innerHTML = paginationHTML;
  //  cap nhat css
  carouselInner.style.width = `${totalWidth}px`;

  var goToSlide = function (i) {
    var translateValue = -itemWidth * i;
    carouselInner.style.translate = `${translateValue}px`;
    updatePagination(i);
  };
  var updatePagination = function (i) {
    Array.from(carouselDots.children).forEach(function (dot, index) {
      if (dot.classList.contains("active")) {
        dot.classList.remove("active");
      }
      if (i === index) {
        dot.classList.add("active");
      }
      dot.addEventListener("click", function () {
        currentSlideIndex = index;
        position = -itemWidth * currentSlideIndex;
        goToSlide(currentSlideIndex);
      });
    });
  };
  //  xu ly chuyen slide khi click next
  var position = 0;
  currentSlideIndex = 0;
  navNext.addEventListener("click", function () {
    if (Math.abs(position) < totalWidth - itemWidth) {
      position -= itemWidth;
      currentSlideIndex++;
      carouselInner.style.translate = `${position}px`;
      updatePagination(currentSlideIndex);
    }
  });
}
navPrev.addEventListener("click", function () {
  if (position < 0) {
    position += itemWidth;
    currentSlideIndex--;
    carouselInner.style.translate = `${position}px`;
    updatePagination(currentSlideIndex);
  }
});

// Vuot chuyen trang
var isDrag = false;
var initalOffsetX;
var rate = (10 * itemWidth) / 100;
var check = false;
carouselInner.addEventListener("mousedown", function (e) {
  isDrag = true;
  initalOffsetX = e.offsetX;
});
carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDrag) {
    var currentOffsetX = e.offsetX;
    var moveWidth = currentOffsetX - initalOffsetX;
    if (moveWidth < 0) {
      // next slide
      if (Math.abs(moveWidth) > rate) {
        if (!check && Math.position < totalWidth - itemWidth) {
          carouselInner.style.translate = null;
          position -= itemWidth;
          carouselInner.style.translate = `${position}px`;
          check = true;
        }
      } else {
        carouselInner.style.translate = "none";
        carouselInner.style.translate = `${position + moveWidth}px`;
      }
    }
  }
});
carouselInner.addEventListener("mouseup", function () {
  isDrag = false;
  check = false;
});
