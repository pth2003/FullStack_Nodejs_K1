import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;
client.setUrl(SERVER_AUTH_API);
const root = document.querySelector("#root");

const render = () => {
  const loginHtml = `<div class="container py-3">
    <h2 class="text-center">Đăng Nhập</h2>
    <hr />
    <form action="" class="login">
      <div class="mb-3">
        <label for="">Email</label>
        <input
          type="email"
          class="form-control email"
          placeholder="Email..."
          required
        />
      </div>
      <div class="mb-3">
        <label for="">Password</label>
        <input
          type="password"
          class="form-control password"
          placeholder="Password..."
          required
        />
      </div>
      <div class="d-flex justify-content-center gap-3">
        <button id = "login-btn" class="btn btn-primary ">Đăng nhập</button>
        <button id="register-btn"  class="btn btn-secondary ">Đăng ký</button>
      </div>
    </form>
    </div>`;

  root.innerHTML = loginHtml;
};
render();
const registerHtml = `<div class="container py-3">
<h2 class="text-center">Đăng Ký</h2>
<hr />
<form action="" class="register">
  <div class="mb-3">
    <label for="">Email</label>
    <input
      type="email"
      class="form-control email"
      placeholder="Email..."
      required
    />
  </div>
  <div class="mb-3">
    <label for="">Password</label>
    <input
      type="password"
      class="form-control password"
      placeholder="Password..."
      required
    />
  </div>
  <div class="mb-3">
    <label for="">Name</label>
    <input
      type="text"
      class="form-control name"
      placeholder="Name..."
      required
    />
  </div>
  <div class="d-flex justify-content-center gap-3">
    <button id = "login-btn" class="btn btn-secondary ">Đăng nhập</button>
    <button id="register-btn" class="btn btn-primary ">Đăng ký</button>
  </div>
</form>
</div>`;

const loginForm = document.querySelector(".login");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailEl = e.target.querySelector(".email");
  const passEl = e.target.querySelector(".password");
  const email = emailEl.value;
  const password = passEl.value;

  handleLogin({ email, password });
  emailEl.value = "";
  passEl.value = "";
});
// phantrunghieu1412@gmail.com
const handleLogin = async (data) => {
  const { data: tokens } = await client.post("/auth/login", data);
  const { accessToken, refreshToken } = tokens.data;
  console.log(accessToken, refreshToken);
};
const registerForm = document.querySelector(".register");
const loginBtn = document.querySelector("#login-btn");
const registerBtn = document.querySelector("#register-btn");
console.log(loginBtn);
loginBtn.addEventListener("click", () => {
  root.innerHTML = "";
  render();
});
registerBtn.addEventListener("click", () => {
  root.innerHTML = "";
  root.innerHTML = registerHtml;
});

// registerForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const emailEl = e.target.querySelector(".email");
//   const passEl = e.target.querySelector(".password");
//   const nameEL = e.target.querySelector(".name");
//   const email = emailEl.value;
//   const password = passEl.value;
//   const name = nameEL.value;
//   handleRegister({ email, password, name });
//   emailEl.value = "";
//   passEl.value = "";
//   nameEL.value = "";
// });
// const handleRegister = async (data) => {
//   const { data: tokens } = await client.post("/auth/register", data);
//   if (tokens.code === 201) {
//     console.log(tokens.message);
//   }
// };
