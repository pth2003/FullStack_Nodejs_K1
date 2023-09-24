// ES6 function

// arrow function : la 1 cach viet khac cua expession function

// arrow fuction khong co tham so :
// const getMsg = () => {
//   return "hello f8";
// };

// console.log(getMsg());

// arrow function co 1 tham so

// var getMsg = (msg) => {
//   return msg;
// };

// console.log(getMsg("f8"));

// arrow function nhieu tham so

// const getMsg = (msg, type = "success") => {
//   console.log(msg, type);
// };

// getMsg("F8", "error");

// arrow function co return
// var getTotal = (a, b) => a + b;

// console.log(getTotal(1, 2));

// Lưu ý : khi return về 1 object thì phải bõ trong ngoặc tròn

// var getCustomer = () => ({ name: "Hieu" });

// console.log(getCustomer());

// var users = [
//   {
//     name: "A",
//     email: "abc@gmail.com",
//   },
//   {
//     name: "B",
//     email: "abc@gmail.com",
//   },
//   {
//     name: "C",
//     email: "abc@gmail.com",
//   },
// ];

// var html = users
//   .map((user) => `name : ${user.name} email : ${user.email} `)
//   .join();

// document.body.innerHTML = html;

// Lưu ý khi sử dụng arrow function
// 1. khong bind được this, args

// var btn = document.querySelector(".btn");
// // console.log(this);
// var content = document.querySelector(".content");
// content.addEventListener("click", function () {
//   btn.addEventListener(
//     "click",
//     (() => {
//       console.log(this); // this dua vao cha gan nhat cua this
//     }).bind(this)
//   );
// });
// var getMax = () => {
//   console.log(arguments);
// };

// 2. không phù hợp tạo method

// var user = {
//   name: "hieu",
//   email: "aaa00",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// console.log(user.getName());
// neu method khong can dung this thi van dung duoc

// 3. khong duoc phep dung ham tao

// var Customer = () => {
//   this.name = "Hieu";
// };

// var customer = new Customer();

// 4. Khong Hoisting duoc

// Arrow function thuong dung voi tu khoa const
