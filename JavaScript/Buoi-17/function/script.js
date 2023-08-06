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
// var getA = function (a) {};

var getA = function (fn, ...args) {
  setTimeout(function () {
    console.log("GetA");
    if (typeof fn === "function") {
      fn(...args); // gọi hàm chủ động
    }
  }, 1000);
};
var getB = function (name, subject) {
  console.log("getB", name, subject);
};

getA(getB, "F8", "Fullstack");

// rest parameter :
// function fn(a,b,...args) {
//     return args;
//  }

function sum(...args) {
  for (var i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
sum(1, 2, 3, 6, 1);

var sum2 = function (name, address, number) {
  console.log(name, address, number);
};

var a = ["Phan Trung Hieu", "Vinh Phuc", "123"];
sum2(...a);
