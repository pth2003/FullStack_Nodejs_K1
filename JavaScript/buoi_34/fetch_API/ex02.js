// API  : giao diện lập trình ứng dụng
// front-end -> back-end
// back-end -> back-end
// Sử dụng các hàm trong thư viện

// Khi làm việc với web api -> thường sử dụng chuẩn RESTFul
// url : server api + resource
// http method : phương thức giao tiếp
// GET : lấy dữ liệu
// post : thêm mới dữ liệu
// put : cập nhật dữ liệu
// patch : cập nhật dữ liệu
// delete : xóa dữ liệu
// => do back-end sẽ xây dựng

// ví dụ :
// url : https://api.fullstack.edu.vn/users

// tổng hợp http method + resource => endpoint
// ví dụ : - POST /users
// làm sao để có api
// sử dụng các dịch vụ có sẵn
// fake bằng thư viện json server

const APIUrl = `http://localhost:3000/users`;

// sử dụng hàm fetch để gọi api
// trả về 1 promise
const getUser = async () => {
  const reponse = await fetch(APIUrl);
  // reponse trả về thông tin của reponse sau khi gọi api

  const users = await reponse.json();
  //   Trả về reponse message body
  document.body.innerHTML = users
    .map(({ name, email }) => `<h2>${name}</h2><h3>${email}</h3><hr/>`)
    .join("");
};
getUser();

// const getUser = async (id) => {
//   const reponse = await fetch(APIUrl + "/" + id);
//   const user = await reponse.json();
//   console.log(user);
// };
// getUser(1);

const postUser = async (data) => {
  const reponse = await fetch(APIUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (reponse.ok) {
    console.log("Them thanh cong");
  }
};
// postUser({
//   name: "User 4",
//   email: "user4@gmail.com",
// });
