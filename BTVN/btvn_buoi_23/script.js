var login = document.querySelector(".login");
var register = document.querySelector(".register");
var tabLogin = document.querySelector(".tab-login");
var tabRegister = document.querySelector(".tab-register");
login.addEventListener("click", function () {
  if (login.classList.contains("active")) {
    login.classList.remove("active");
    register.classList.add("active");
  } else {
    login.classList.add("active");
    register.classList.remove("active");
  }
});

register.addEventListener("click", function () {
  if (login.classList.contains("active")) {
    login.classList.remove("active");
    register.classList.add("active");
  } else {
    login.classList.add("active");
    register.classList.remove("active");
  }
});

var email = document.querySelector(".email");
var pass = document.querySelector(".pass");
var errorEmail = document.querySelector(".error-message-email");
var errorPass = document.querySelector(".error-message-pass");

email.addEventListener("blur", function () {
  if (email.value.trim() === "") {
    email.classList.add("error");
    errorEmail.textContent = "Vui lòng nhập thông tin";
  }
});
email.addEventListener("focus", function () {
  email.classList.remove("error");
  errorEmail.textContent = "";
});

pass.addEventListener("blur", function () {
  if (pass.value.trim() === "") {
    pass.classList.add("error");
    errorPass.textContent = "Vui lòng nhập thông tin";
  }
});
pass.addEventListener("focus", function () {
  pass.classList.remove("error");
  errorPass.textContent = "";
});

var btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", function () {
  if (email.value.trim() === "" || pass.value.trim() === "") {
    email.classList.add("error");
    errorEmail.textContent = "Vui lòng nhập thông tin";
    pass.classList.add("error");
    errorPass.textContent = "Vui lòng nhập thông tin";
  }
});

register.addEventListener("click", function () {
  tabLogin.classList.add("hidden");
  tabRegister.classList.remove("hidden");
});
login.addEventListener("click", function () {
  tabLogin.classList.remove("hidden");
  tabRegister.classList.add("hidden");
});

var dangNhap = document.querySelector(".dang-nhap");
var modalBox = document.querySelector(".modal-box");
dangNhap.addEventListener("click", function () {
  modalBox.classList.add("active");
});

var overlay = document.querySelector(".overlay");
overlay.addEventListener("click", function () {
  modalBox.classList.remove("active");
});
