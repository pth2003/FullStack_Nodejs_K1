// Authentication và Authorization

// Authentication là xác thực => đăng nhập,đăng ký
// Authorization là ủy quyền, vai trò => được làm gì trong trang web

// Authentication :
// các loại authentication
//
// Xác thực với session :
//aaaacsess token vs refresh token
import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;
client.setUrl(SERVER_AUTH_API);
const root = document.querySelector("#root");
const getProfile = async () => {
  const token = localStorage.getItem("access_token");
  const { data } = await client.get("/auth/profile", token);

  const nameEl = root.querySelector(".profile .name");
  nameEl.innerText = data.name;
};

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
  <div class="d-grid">
    <button class="btn btn-primary">Đăng nhập</button>
  </div>
</form>
</div>`;

  const welcomeHtml = `<div class="container py-3"> 
    <h2 class = "text-center">Chào mừng bạn quay trở lại</h2> 
    <ul class = "profile list-unstyled d-flex gap-2">
        <li> Chào bạn : <b><span class="name"></span></b></li>
        <li><a href="#" class = "log-out">Đăng xuất </a></li>
    </ul>
    
    </div>`;

  if (localStorage.getItem("access_token")) {
    root.innerHTML = welcomeHtml;
    // Lay thong tin user roi render
    getProfile();
    const logout = root.querySelector(".log-out");
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      render();
    });
  } else {
    root.innerHTML = loginHtml;
  }
};
// maria@mail.com
render();
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

const handleLogin = async (data) => {
  // detructering data form client
  const { data: tokens } = await client.post("/auth/login", data);

  const { access_token, refresh_token } = tokens;

  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);
  render();
};

// Luu tru :
// local
// session
// cookie

// Chi luu tru text
