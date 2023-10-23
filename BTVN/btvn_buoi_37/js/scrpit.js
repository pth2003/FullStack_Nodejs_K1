import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;
client.setUrl(SERVER_AUTH_API);
const root = document.querySelector("#root");
const container = document.createElement("div");
const postList = document.createElement("div");
container.classList.add("container");
root.append(container);
function toast(title = "", message = "", type = "info", duration = 3000) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    toast.classList.add(
      "toast-container",
      "position-fixed",
      "top-0",
      "end-0",
      "p-3"
    );
    // Auto remove toast
    setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    // toast.onclick = function (e) {
    //   if (e.target.closest(".toast__close")) {
    //     main.removeChild(toast);
    //     clearTimeout(autoRemoveId);
    //   }
    // };

    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle",
    };
    const icon = icons[type];

    toast.innerHTML = `
    
    <div id="liveToast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <i class="${icon} me-1" ></i>
        <strong class="me-auto">${title}</strong>
        
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        ${message}
      </div>
    </div>

                  `;
    main.appendChild(toast);
  }
}
const limitPostInPage = 10;
let page = 1;
const getPost = async (query = {}, isLoadMore = false) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.get(`/blogs?${queryString}`);
  handleGetPost(data);
  return data;
};
const handleGetPost = async (res) => {
  postList.innerHTML = "";
  if (res.status_code === "SUCCESS") {
    const { data: blogs } = res;
    blogs.map((blog) => {
      const postItem = document.createElement("div");
      postItem.classList.add("post-item");
      const a = document.createElement("a");
      a.classList.add("user-name");
      a.innerText = blog.userId.name;
      const h3 = document.createElement("h3");
      h3.classList.add("title-post");
      h3.innerText = blog.title;
      const p = document.createElement("p");
      p.classList.add("content-post");
      p.innerText = blog.content;
      const hr = document.createElement("hr");
      hr.style.marginTop = "10px";
      postItem.append(a);
      postItem.append(h3);
      postItem.append(p);
      postItem.append(hr);
      postList.append(postItem);
    });
    container.append(postList);
  }
};
getPost({ _limit: limitPostInPage, _page: page });
const getName = async () => {
  const token = localStorage.getItem("accessToken");

  const { data: user } = await client.get("/users/profile", token);
  renewAccessToken(user);
  const nameEl = root.querySelector(".profile .name");
  nameEl.innerText = user.data.name;
};
const nav = document.createElement("nav");

nav.classList.add("navbar", "bg-body-tertiary", "justify-content-center");
const render = () => {
  const welcomeHtml = `<div class="container-fluid" > 
  <span class="navbar-brand mb-0 h1">Blogger</span>
  <h2 class = "text-center">Chào mừng bạn quay trở lại</h2> 
  <ul class = "profile list-unstyled d-flex gap-2">
      <li> Chào bạn : <b><span class="name"></span></b></li>
      <li><a href="#" id = "log-out">Đăng xuất </a></li>
  </ul>
  
  </div>
  <form style = "width: 50%" class="mt-3 post-form">
        <div class="mb-3">
          <label for="title">Tiêu đề</label>
          <input
            type="text"
            class="form-control"
            id="titlePost"
            name="title"
            placeholder="Nhập tiêu đề"
          />
        </div>
        <div class="mb-3">
          <label for="content">Nội dung bài viết</label>
          <textarea
            class="form-control"
            id="contentPost"
            name="content"
            rows="5"
            placeholder="Nhập nội dung bài viết"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Gửi</button>
      </form>`;
  const navHtml = `<div class="container-fluid">
  <span class="navbar-brand mb-0 h1">Blogger</span>
  <button class="btn btn-primary btn-login">Đăng nhập</button>
  </div>
  <div class="login-section d-none">
      <form action="" class="login">
        <div class="mb-3">
          <label for="">Email</label>
          <input
            type="email"
            class="form-control email"
            placeholder="Email..."
          />
        </div>
        <div class="mb-3">
          <label for="">Password</label>
          <input
            type="password"
            class="form-control password"
            placeholder="Password..."
          />
        </div>
        <div class="d-flex gap-3">
          <button class="btn btn-primary flex-grow-1 btn-login-form">
            Đăng nhập
          </button>
          <button type="button" class="btn btn-secondary flex-grow-1 btn-register">
            Đăng kí
          </button>
        </div>
      </form>
      <form action="" class="register d-none">
        <div class="mb-3">
          <label for="">Email</label>
          <input
            type="email"
            class="form-control email"
            placeholder="Email..."
          />
        </div>
        <div class="mb-3">
          <label for="">Password</label>
          <input
            type="password"
            class="form-control password"
            placeholder="Password..."
          />
        </div>
        <div class="mb-3">
          <label for="">Name</label>
          <input
            type="text"
            class="form-control name"
            placeholder="Name..."
          />
        </div>
        <div class="d-flex gap-3">
        <button class="btn btn-primary flex-grow-1 btn-register">
            Đăng kí
          </button>
          <button type="button" class="btn btn-secondary flex-grow-1 btn-login-form">
            Đăng nhập
          </button>
          
        </div>
      </form>
      <span class="exit">x</span>
    </div>`;
  if (localStorage.getItem("accessToken")) {
    nav.innerHTML = welcomeHtml;

    getName();
    const postForm = document.querySelector(".post-form");
    postForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = e.target.querySelector("#titlePost").value;
      const content = e.target.querySelector("#contentPost").value;
      handlePost({ title, content });
      render();
    });
    const logout = nav.querySelector("#log-out");
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      render();
    });
  } else {
    nav.innerHTML = navHtml;
  }

  container.append(nav);
  postList.innerHTML = "";
  getPost({ _limit: limitPostInPage, _page: page });
};
render();

const btnLogin = document.querySelector(".btn-login");
const loginSection = document.querySelector(".login-section");
const registerForm = document.querySelector(".register");
const btnResgiter = loginSection.querySelector(".login .btn-register");
const btnLoginForm = loginSection.querySelector(".register .btn-login-form");
btnLogin.addEventListener("click", () => {
  loginSection.classList.remove("d-none");
});
btnResgiter.addEventListener("click", () => {
  registerForm.classList.remove("d-none");
  loginForm.classList.add("d-none");
});
btnLoginForm.addEventListener("click", () => {
  registerForm.classList.add("d-none");
  loginForm.classList.remove("d-none");
});
const exit = document.querySelector(".exit");
exit.addEventListener("click", () => {
  loginSection.classList.add("d-none");
});
const handleLogin = async (data) => {
  const { email, password } = data;
  if (!email || !password) {
    toast("Thất bại", "Vui lòng nhập đủ thông tin", "error");
    return false;
  }
  if (password < 8) {
    toast("Thất bại", "Mật khẩu chưa đủ  8 kí tự", "error");
    return false;
  }
  const { data: tokens } = await client.post("/auth/login", data);
  if ((tokens.code = 200)) {
    toast("Thành công", tokens.message, "success");
  } else {
    toast("Thất bại", tokens.message, "error");
  }
  const { accessToken, refreshToken } = tokens.data;
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  render();
};
const loginForm = document.querySelector(".login");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector(".email").value;
  const password = e.target.querySelector(".password").value;
  handleLogin({ email, password });
  e.target.querySelector(".email").value = "";
  e.target.querySelector(".password").value = "";
});

const handlePost = async (data) => {
  const token = localStorage.getItem("accessToken");
  await client.post("/blogs", data, token);
  render();
};

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector(".email").value;
  const password = e.target.querySelector(".password").value;
  const name = e.target.querySelector(".name").value;
  handleRegister({ email, password, name });
});
const handleRegister = async (data) => {
  const res = await client.post("/auth/register", data);
  if (res.code === 201) {
    toast("Thành công", res.data.message, "success");
    render();
  } else {
    toast("Thất bại", res.data.message, "error");
  }
};

async function renewAccessToken(response) {
  if (response.status_code !== "SUCCESS") {
    const refreshToken = localStorage.getItem("refresh_token");
    const { data } = await client.post("/auth/refresh-token", {
      refreshToken: refreshToken,
    });
    localStorage.setItem("accessToken", data.data.token.accessToken);
    localStorage.setItem("refreshToken", data.data.token.refreshToken);
    render();
  }
}

/* <div class="post-list">
          <div class="post-item">
            <a href="" class="user-name">Hieu</a>
            <h3 class="title-post">Test</h3>
            <p class="content-post">Content Test blog</p>
            <hr style="margin-top: 10px" />
          </div>
          <div class="post-item">
            <a href="" class="user-name">Hieu</a>
            <h3 class="title-post">Test</h3>
            <p class="content-post">Content Test blog</p>
            <hr style="margin-top: 10px" />
          </div>
        </div> */
