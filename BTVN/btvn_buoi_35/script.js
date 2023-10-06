const api = `https://cqyygs-8080.csb.app/posts`;
let curPage = 1;
let hasMore = true;
let isFetching = false;
let root = document.getElementById("root");

const render = (posts) => {
  posts.forEach((post) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h3>Bài ${post.id}</h3>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr>
        `;
    root.append(div);
  });
};
const getData = async () => {
  isFetching = true;
  const res = await fetch(`${api}?_page=${curPage}`);
  const data = await res.json();
  isFetching = false;
  if (data.length === 0) {
    hasMore = false;
    return;
  }
  render(data);
  curPage++;
};

getData();

window.addEventListener("scroll", () => {
  if (isFetching || !hasMore) {
    return;
  }
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    getData();
  }
});
