// // custom event
// // la 1 su kien tao ra boi nguoi phat trien
// // duoc tao ra de phan hoi cac tuy chinh

// // new Event()

// var btn = document.querySelector(".btn");
// var countEl = document.querySelector(".count");
// var message = document.querySelector(".message");
// // var countEvent = new Event("count");
// // ten su kien khong duoc trung voi cac su kien co san

// // btn.addEventListener("click", function () {
// //   countEl.innerText++;

// //   //   Neu count = 10 thi hien thi noi dung hello f8

// //   if (countEl.textContent === "10") {
// //     // message.innerText = "hello F8";
// //     countEl.dispatchEvent(countEvent);
// //   }
// // });

// // countEl.addEventListener("count", function () {
// //   message.innerText = "Hello F8";
// // });

// // btn.addEventListener("mousedown", function () {
// //   countEl.innerText++;
// // });
// // btn.addEventListener("mouseup", function() {
// //     countEl
// // })

// var increEvent = new Event("increment");

// btn.addEventListener("mousedown", function () {
//   countEl.dispatchEvent(increEvent);
// });
// btn.addEventListener("mouseup", function () {
//   isMouseDown = false;
// });
// var isMouseDown = false;
// var handleIncrement = function (current) {
//   current.innerText++;
//   var id = setTimeout(function () {
//     handleIncrement(current);
//   }, 100);
//   if (!isMouseDown) {
//     clearTimeout(id);
//   }
// };
// countEl.addEventListener("increment", function () {
//   isMouseDown = true;
//   handleIncrement(this);
// });

// trigger

var timer = document.querySelector(".timer");
var isDrag = false;
var initialValue = null;
var dragEvent;
// timer.addEventListener("change", function () {
//   //   console.log(this.value);
// });
// timer.addEventListener("mousedown", function () {
//   isDrag = true;
// });
document.addEventListener("mouseup", function () {
  initialValue = null;
});

timer.addEventListener("input", function () {
  if (!initialValue) {
    initialValue = this.value;
    dragEvent = new CustomEvent("drag", {
      detail: {
        initialValue: initialValue,
      },
    });
  }
  if (this.value !== initialValue) {
    timer.dispatchEvent(dragEvent);
  }
});

timer.addEventListener("drag", function (e) {
  console.log(e);
});
