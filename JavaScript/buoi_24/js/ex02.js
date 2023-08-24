/*  Event object
    
    - 

*/
// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function (e) {
//   if (!e.ctrlKey) {
//     this.style.background = "green";
//   } else {
//     this.style.background = "red";
//   }
// });

// var nameEl = document.querySelector(".name");

// nameEl.addEventListener("input", function (e) {
//   console.log(e);
// });

// nameEl.addEventListener("keyup", function (e) {
//   console.log(e);
// });

// btn.addEventListener("mouseup", function (e) {
//   console.log(e);
// });
// var isDown = false;
// var offsetX = 0;
// var offsetY = 0;
// btn.addEventListener("mousedown", function (e) {
//   if (e.which === 1) {
//     isDown = true;
//     offsetX = e.offsetX;
//     offsetY = e.offsetY;
//   }
// });

// document.addEventListener("mousemove", function (e) {
//   if (isDown) {
//     // console.log(e.clientX, e.clientY);
//     var css = {
//       top: `${e.clientY - offsetY}px`,
//       left: `${e.clientX - offsetX}px`,
//     };
//     Object.assign(btn.style, css);
//   }
// });
// document.addEventListener("mouseup", function () {
//   isDown = false;
// });

// Hanh dong mac dinh html
// chan bang phuong thuc : preventDefault()
// var link = document.querySelector(".link");
// link.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(this.href);
// });

// var content = document.querySelector(".content");

// var span = document.querySelector("span");

// content.addEventListener("click", function (e) {
//   console.log(this);
//   console.log(e.target);
// });

// span.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("span click");
// });

// Ngăn tình trạng nổi bọt của thẻ span  : e.stopPropagation();
