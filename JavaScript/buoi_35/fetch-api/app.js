//content-type phu thuoc vao backend cho phep
const api = `http://localhost:3000`;
const postUser = async (data) => {
  const dataUrlEncoded = new URLSearchParams(data).toString();
  const response = await fetch(`${api}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: dataUrlEncoded,
  });
  console.log(response);
};
// postUser({
//   id: 5,
//   name: "user5",
//   email: "user5@gmail.com",
// });
// Tu khoa : URLSearchParams

const getUser = async () => {
  const response = await fetch(`${api}/users`);
  const users = await response.json();
  console.log(response.headers.get("Content-Type"));
};

getUser();
