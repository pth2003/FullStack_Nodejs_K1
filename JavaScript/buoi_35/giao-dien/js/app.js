import { config } from "./config.js";
import { client } from "./client.js";
const { SERVER_API, PAGE_LIMIT } = config;

const render = (posts) => {
  // post tra ve 1 mang
  const postEl = document.querySelector(".posts");
  postEl.innerText = "";
  if (posts.length) {
    posts.forEach(({ id, title, excerpt }) => {
      const postItem = document.createElement("div");
      postItem.classList.add("post-item");
      const h2 = document.createElement("h2");
      const a = document.createElement("a");
      a.innerText = title;
      a.href = "#";
      h2.appendChild(a);
      postItem.appendChild(h2);
      const p = document.createElement("p");
      p.innerText = excerpt;
      postItem.appendChild(p);
      const removeBtn = document.createElement("span");
      removeBtn.classList.add("remove");
      removeBtn.href = "#";
      removeBtn.innerText = "Xoa";
      removeBtn.addEventListener("click", function () {
        if (confirm("Ban co chac chan muon xoa ?")) {
          removePost(id);
        }
      });
      postItem.append(removeBtn);
      postEl.append(postItem);
    });
  }
};

const renderPaginate = (totalPage) => {
  const paginateEl = document.querySelector(".paginate");
  paginateEl.innerText = "";
  if (totalPage > 1) {
    // prev btn
    if (curPage !== 1) {
      const spanPrev = document.createElement("span");
      const aPrev = document.createElement("a");
      aPrev.href = "#";
      aPrev.innerText = "Prev";
      aPrev.addEventListener("click", (e) => {
        e.preventDefault();
        curPage--;
        goPage(curPage);
      });
      spanPrev.append(aPrev);
      paginateEl.append(spanPrev);
    }

    // page number
    for (let page = 1; page <= totalPage; page++) {
      const span = document.createElement("span");
      const a = document.createElement("a");
      a.href = "#";
      a.innerText = page;
      if (page === curPage) {
        span.classList.add("active");
      }
      a.addEventListener("click", (e) => {
        e.preventDefault();
        goPage(page);
      });
      span.append(a);
      paginateEl.append(span);
    }
    // Next btn
    if (curPage !== totalPage) {
      const spanNext = document.createElement("span");
      const aNext = document.createElement("a");
      aNext.href = "#";
      aNext.innerText = "Next";
      aNext.addEventListener("click", (e) => {
        e.preventDefault();
        curPage++;
        goPage(curPage);
      });
      spanNext.append(aNext);
      paginateEl.append(spanNext);
    }
  }
};
const getPost = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { response, data } = await client.get(`/posts?${queryString}`);
  const total = response.headers.get("x-total-count");

  const totalPage = Math.ceil(total / PAGE_LIMIT);

  render(data);
  renderPaginate(totalPage);
};
const addPost = async (data) => {
  const { response } = await client.post("/posts", data);

  if (response.ok) {
    curPage = 1;
    getPost({
      _sort: "id",
      _order: "desc",
      _limit: PAGE_LIMIT,
      _page: curPage,
    });
    // dong form
    postForm.innerText = "";
    sortbyEl.value = "lastest";
  }
};

const removePost = async (id) => {
  const { response } = await client.delete(`/posts/${id}`);
  if (response.ok) {
    curPage = 1;
    getPost({
      _sort: "id",
      _order: "desc",
      _limit: PAGE_LIMIT,
      _page: curPage,
    });
    sortbyEl.value = "lastest";
  }
};
const searchForm = document.querySelector(".search");
const sortbyEl = searchForm.querySelector(".sort-by");
// khoi tao cac gia tri mac dinh
let sort = "id";
let order = "desc";
let keyword = "";
let curPage = 1;
getPost({
  _sort: sort,
  _order: order,
  _limit: PAGE_LIMIT,
  _page: curPage,
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  keyword = e.target.children[0].value;
  getPost({
    q: keyword,
    _sort: sort,
    _order: order,
    _limit: PAGE_LIMIT,
    _page: curPage,
  });
  e.target.children[0].value = "";
});
sortbyEl.addEventListener("change", (e) => {
  order = e.target.value === "lastest" ? "desc" : "asc";
  getPost({
    q: keyword,
    _sort: sort,
    _order: order,
    _limit: PAGE_LIMIT,
    _page: curPage,
  });
  goPage(1);
});

// Xu ly phan trang
const goPage = (page) => {
  curPage = page;
  getPost({
    q: keyword,
    _sort: sort,
    _order: order,
    _limit: PAGE_LIMIT,
    _page: curPage,
  });
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};
// paginate limit
const postNewBtn = document.querySelector(".post-new");
const postForm = document.querySelector(".post-form");
postNewBtn.addEventListener("click", () => {
  postForm.innerText = "";
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmitForm);
  const titleEl = document.createElement("input");
  titleEl.placeholder = "Tieu de bai viet";
  titleEl.required = true;
  form.append(titleEl);
  const excerptEl = document.createElement("textarea");
  excerptEl.required = true;
  excerptEl.placeholder = "Mo ta ngan";
  form.append(excerptEl);
  const contentEl = document.createElement("textarea");
  contentEl.placeholder = "Noi Dung";
  contentEl.required = true;
  form.append(contentEl);
  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Save";
  form.append(submitBtn);
  postForm.append(form);
});

const handleSubmitForm = (e) => {
  e.preventDefault();
  const fieldList = e.target.children;
  const [titleEl, excerptEl, contentEl] = Array.from(fieldList);
  const title = titleEl.value;
  const excerpt = excerptEl.value;
  const content = contentEl.value;
  addPost({ title, excerpt, content });
};
