// object liternal : doi tuong nguyen ban
// => khoi tao tu ham tao co ten la object
// function contructor : ham tao

// Khai bao
// var users = new Object();

// Cau tao cua object
// Thuoc tinh : bien
// phuong thuc : ham

// var users = {
//   name: "Phan Hieu",
//   email: "abc@gmail.com",
//   address: "Ha Noi",
//   job: "Sinh Vien",
//   getName: function () {
//     return "Hoang An";
//   },
// };
// var key = "job";
// console.log(users);

// Truy cap vao key cua object
// console.log(users.name);
// console.log(users["address"]);
// console.log(users[key]);

// // Them key moi
// users.location = "Vinh Phuc";
// // sua key
// // Xoa key
// delete users.location;

// for (var key in users) {
//   var value = users[key];
//   if (typeof value === "function") {
//     console.log(value());
//   } else {
//     console.log(value);
//   }
// }

// var keys = Object.keys(users);
// keys.forEach(function (key) {
//   var value = users[key];
//   if (typeof value === "function") {
//     console.log(value());
//   } else {
//     console.log(value);
//   }
// });

// Kiem tra mot bien la 1 mot object
// var a = {};
// if (typeof a === "object" && !Array.isArray(a) && a !== null) {
//   console.log("La object");
// } else {
//   console.log("Khong la object");
// }
