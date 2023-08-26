var inputBox = document.querySelector("#input-box");
var addBtn = document.querySelector(".btn");

var listContainer = document.querySelector(".list-container");

addBtn.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("Ban chua nhap viec can lam!");
  } else {
    var li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    var lastLi = document.createElement("div");
    var updateIcon = document.createElement("i");
    updateIcon.classList.add("fa-solid", "fa-pen-to-square");
    var trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash");
    lastLi.appendChild(updateIcon);
    lastLi.appendChild(trashIcon);
    li.appendChild(lastLi);
  }
  inputBox.value = "";
});
listContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.parentElement.remove();
  }
});
