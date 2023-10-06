import { config } from "./config.js";
import { client } from "./client.js";
const { SERVER_API } = config;

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
      postEl.append(postItem);
    });
  }
};

const getPost = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { response, data } = await client.get(`/posts?${queryString}`);
  render(data);
};

const searchForm = document.querySelector(".search");
const sortbyEl = searchForm.querySelector(".sort-by");
// khoi tao cac gia tri mac dinh
let sort = "id";
let order = "desc";
let keyword = "";
getPost({
  _sort: sort,
  _order: order,
});
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  keyword = e.target.children[0].value;
  getPost({
    q: keyword,
    _sort: sort,
    _order: order,
  });
  e.target.children[0].value = "";
});
sortbyEl.addEventListener("change", (e) => {
  order = e.target.value === "lastest" ? "desc" : "asc";
  getPost({
    q: keyword,
    _sort: sort,
    _order: order,
  });
});
