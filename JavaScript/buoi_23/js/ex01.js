// DOM HTML
// -Thay doi html : text , thuoc tinh, xoa the

// 1. Lay noi dung ben trong the html
// Truoc khi lay noi dung can phai lay duoc element
// var content = document.querySelector(".content");
// 1.1 : tra ve noi dung ben trong the html (bao gom cac the khac)
// console.log(content.innerHTML);

// 1.2 tra ve noi dung trong thu HTML
// console.log(content.innerText);

// 1.3 : textContent
// tra ve text o ben trong the html : giwi nguyen khoang cach
// console.log(content.textContent);

// 1/4 : outer html
// console.log(content.outerText);

// 2.Thay doi content html
// content.innerHTML = "<h1> Phan Trung Hieu </h1>";
// content.outerHTML = "<h1> Phan Trung Hieu </h1>";

// Bai tap :
// var result = document.querySelector(".result");

// var btnClick = document.querySelector(".btn");

// // var count = document.querySelector(".count");
// var count = 0;
// btnClick.addEventListener("click", function () {
//   let contentHTML = content.innerHTML ? content.innerHTML : result.innerHTML;
//   if (content.innerHTML) {
//     result.innerHTML = contentHTML;
//     content.innerHTML = "";
//     this.querySelector(".text").innerText = "Len";
//   } else {
//     content.innerHTML = contentHTML;
//     result.innerHTML = "";
//     this.querySelector(".text").innerText = "Xuong";
//   }
//   count++;
//   this.querySelector(".count").innerText = count;
// });
