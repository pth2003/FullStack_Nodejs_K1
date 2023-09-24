// ES6 Object Array
//  1. Destructuring
//  2. Spread
//  3. Enhance

// Destructuring Object => Phá vỡ cấu trúc array hoac object dể truy cập vào các phân tử và lưu thành 1 biến riêng biệt
// var user = {
//   name: "hieu",
//   email: "abc@gmail.com",
//   age: 31,
//   address: "Ha noi",
// };

// // console.log(users.name);

// let { name: _name, email, ...rest } = users;
// // name : _name => đổi tên biến
// // các biến phải có tên giống trong object

// console.log(_name, email);
// console.log(rest);

// Mục đích làm object cho tường minh

// Destructuring Array

// const users = ["Hieu", "abc", 31, "Ha Noi"];

// // const [name, email, , address, salary = 12002] = users;
// // // Array khong co truong hop doi ten

// // console.log(name, email, address, salary);

// const [name, email, ...[age, address]] = users;
// console.log(name, email);
// // trong rest Array co the destructuring tiep
// console.log(age, address);

// var customers = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 3, name: "C" },
// ];

// var html = customers
//   .map(({ id, name }) => {
//     return `
//     <h3> ${id} - ${name} </h3>
//     `;
//   })
//   .join("");

// console.log(html);

// 2. Spread
// clone 1 obj
// const oldObject = {
//   name: "Hieu",
//   age: 31,
// };

// const newObject = {
//   email: "abc",
//   address: "Ha Noi",
//   ...oldObject,
// };

// console.log(newObject);

const getTotal = (a, b) => {
  console.log(a, b);
};

const values = [1, 2];

getTotal(...values);
