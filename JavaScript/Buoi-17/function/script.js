// tham số : biến khi định nghĩa hàm
// đối số : biến truyền vào khi gọi hàm
// function getMessage(msg, type) {
//   console.log("Xin chao " + msg);
//   console.log(`Type ${type}`);
// }
// getMessage("F8", "error");
// function getTotal(a, b) {
//   var s = a + b;
//   console.log(s);
// }
// // khi từ khóa return được gọi thì ngay lập tức thoát hàm
// getTotal(3, 5);
// function getTotal2(a, b) {
//   return a + b;
// // }
// // console.log(getTotal2(10, 20));
// function isEven(n) {
//   if (n % 2 === 0) {
//     return true;
//   }
//   return false;
// }
// var n = 10;
// for (var i = 1; i <= 10; i++) {
//   if (isEven(i)) {
//     console.log(`${i} la so chan`);
//   }
// }

// biến toàn cục và biến cục bộ
// var msg = "Hello F8";
// function getMessage() {
//   console.log(msg);
// }
// getMessage();

// expession function
// let getMessage = function (msg) {
//   return msg;
// };

// console.log(getMessage(msg));
// if (typeof getMessage === "function") {
//   console.log("Day la function");
// }

// let sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(10, 2));

// callback : truyen vao tham so la func
var getA = function (a) {};
