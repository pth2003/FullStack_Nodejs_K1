// DOM node
// Su kien onload => trang web duoc tai xong tat ca tai nguyen

// window.addEventListener("load", function () {
//   var title = document.querySelector(".title");
//   console.log(title);
// });

// DOMContentLoaded : Khi cay DOM duoc hinh thanh

// document.addEventListener("DOMContentLoaded", function () {
//   var title = document.querySelector(".title");
//   console.log(title);
// });

// Tao element node => dung phuong thuc create element
var root = document.querySelector("#root");
// var h1 = document.createElement("h1");
// h1.innerText = "F8";
// Render Element Node len UI
// Dieu kien : phai co 1 element that

// root.appendChild(h1);

// var ul = document.createElement("ul");
// var li = document.createElement("li");

// li.innerText = "Item 1";
// ul.appendChild(li);

// var li = document.createElement("li");

// li.innerText = "Item 2";
// ul.appendChild(li);
// var li = document.createElement("li");

// li.innerText = "Item 3";
// ul.appendChild(li);

// root.append(ul);

// var h2 = document.createElement("h2");
// h2.innerText = "F8 - Fullstack";
// root.prepend(h2);

// // Thay doi noi hoac thuoc tinh 1 node
// h2.innerText = "Danh sach";

// Xay dung ung dung couter dung node dom

var h2Counter = document.createElement("h2");
var handleIncrement = function () {
  if (+countNumber.data < 10) {
    countNumber.data++;
  } else {
    countNumber.remove();
  }
};
h2Counter.innerText = "Count : ";
var countNumber = document.createTextNode(0); // la 1 object
h2Counter.append(countNumber);
root.append(h2Counter);

var btnIncre = document.createElement("button");

btnIncre.innerText = "+";
btnIncre.addEventListener("click", handleIncrement);
root.append(btnIncre);

var counterCmt = document.createComment("Couter App");
root.append(counterCmt);

// Them 1 node moi vao truoc 1 node khac
var h2Title = document.createElement("h2");
h2Title.innerText = "Counter App";

root.insertBefore(h2Title, h2Counter);

// Thay the node cu bang node moi

var h2TitleNew = document.createElement("h2");
h2TitleNew.innerText = "Ung dung dem";

root.replaceChild(h2TitleNew, h2Title);
