// DOM
/* 1. DOM Element : giup truy xuat vao cac the HTML => tao doi tuong HTML 
   2. DOM CSS : thay doi css inline cua html
   3. DOM HTML : Thay doi  noi dung, thuoc tinh html
   4. DOM Event : Gan su kien cho cac the html
   5. DOM Event Listener : Lang nghe cac su kien
   6. DOM navigation : thao tac voi cac element phan cap
   7. DOM Node : thao tac cac the html thong qua node (Object)
*/

// 1. DOM Element
// Truy xuat vao the html co san

// 1. truy xuat qua id  : document.getElementById("title")
// var title = document.getElementById("title");
// console.log(title);

// 2. truy xuat qua class : document.getElementsByClassName
// var titleList = document.getElementsByClassName("title");

// console.log(titleList);
// console.log(Array.from(titleList));
// for (var i = 0; i < titleList.length; i++) {
//   console.log(titleList[i]);
// }

// 3. Truy xuat thong qua tag name
// var titleList = document.getElementsByTagName("h1");
// console.log(titleList);

// 4. Truy xuat qua css selector
// var title = document.querySelectorAll(".title");
// console.log(title);

/* DOM Event 

    1.gan tac dong truc tiep vao the html thong qua thuoc tinh
    2. tac dong thong qua dom element
*/
// var handleClick = function () {
//   console.log("Dang ky thanh cong");
// };

// var handleChangeInput = function () {
//   console.log("Da nhap xong");
// };

// var btn = document.querySelector(".btn");
// // console.log([btn]);
// btn.onclick = function () {
//   console.log("Thanh cong");
// };

// var province = document.querySelector(".province");
// province.onchange = function () {
//   console.log("Da chon");
// };

// var fullName = document.querySelector(".fullName");

// fullName.onchange = handleChangeInput;

//  Event Listener
/* add,remove */
// var btn = document.querySelector(".btn");

// var handleClick = function (e) {
//   // e = event obj
//   console.log(e);
//   console.log([this]);
// };
// btn.addEventListener("click", handleClick);

// province.addEventListener("change", function () {
//   console.log("Da chon");
//   btn.removeEventListener("click", handleClick);
// });

var items = document.querySelectorAll(".menu li");
for (var i = 0; i < items.length; i++) {
  //   console.log(items[i]);
  items[i].addEventListener("click", function () {
    console.log(this.innerHTML);
  });
}
