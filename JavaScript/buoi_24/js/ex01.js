var content = document.querySelector(".content");
var btn = document.querySelector(".btn");
// content.style = `color : red; font-weight : bold`;

// content.style.color = "blue";
// content.style.fontWeight = "bold";
// content.style.fontSize = "30px";

// var css = {
//   color: "green",
//   fontSize: "30px",
//   fontWeight: "bold",
// };

// Object.assign(content.style, css);

// console.log(content.style.fontSize);
var count = 0;
btn.addEventListener("click", function () {
  if (content.style.display === "") {
    content.style.display = "none";
    this.textContent = "Hien";
  } else {
    content.style.display = "";
    this.textContent = "Ẩn";
  }
  count++;
  if (count >= 5) {
    this.disabled = "true";
  }
});

// Yeu cau : chi cho phep click 5 lan
