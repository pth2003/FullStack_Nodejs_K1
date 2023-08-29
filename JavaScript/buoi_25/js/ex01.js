// var btnDelete = document.querySelectorAll(".remove");

// console.log(btnDelete);
// btnDelete.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     this.parentElement.remove();
//   });
// });
var menu = document.querySelector(".menu ");
// children  : cap con gan nhat
var items = menu.children;

// console.log(items);

var linkList = document.querySelectorAll(".menu a");
if (linkList.length) {
  linkList.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      //   this.style.color = "red";
      var children = this.parentElement.children;
      if (children.length === 2) {
        children[1].style.background = "pink";
      } else {
        this.style.color = "red";
      }
    });
  });
}
