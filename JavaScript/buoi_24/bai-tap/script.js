var checkInput = document.querySelectorAll(".check-input");

var checkAll = document.querySelector("#all");
var count = 0;
checkAll.addEventListener("change", function () {
  count = checkAll.checked ? checkInput.length : 0;
  if (checkAll.checked === true) {
    for (var i = 0; i < checkInput.length; i++) {
      checkInput[i].checked = true;
    }
  } else {
    for (var i = 0; i < checkInput.length; i++) {
      checkInput[i].checked = false;
    }
  }
});

checkInput.forEach(function (check) {
  check.addEventListener("change", function () {
    if (check.checked) {
      count++;
    } else {
      count--;
    }
    if (count === checkInput.length) {
      checkAll.checked = true;
    } else {
      checkAll.checked = false;
    }
  });
});
