// Xu ly loi XSS

var todo = document.querySelector(".todos");
var todoList = document.querySelector(".todo-list");
var todoForm = document.querySelector("form");

// var handleRemove = function (todo) {
//   todo.remove();
// };
// todoForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var inputEl = this.children[0];
//   var doName = inputEl.value;
//   if (!doName.length) {
//     return;
//   }
//   var div = document.createElement("div");
//   div.className = "ToDo";
//   p = document.createElement("p");
//   p.innerText = doName;
//   btnXoa = document.createElement("button");
//   btnXoa.innerText = "x";
//   div.append(p);
//   div.append(btnXoa);
//   btnXoa.addEventListener("click", function () {
//     handleRemove(div);
//   });
//   todoList.append(div);
//   inputEl.value = "";
// });

var h2 = document.querySelector("h2");
console.log(h2.parentNode);
