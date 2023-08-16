// Number : kieu du lieu nguyen thuy

// var a = 10;
// console.log(a);

// Ham tao cua number la Number
// console.log(Number.prototype);

// Kiem tra 1 bien co phai number khong
// if (a === 0 || (a && a.constructor.name === "Number")) {
//   console.log("day la so");
// } else {
//   console.log("khong la so");
// }
// Kiem tra so nguyen
// if (Number.isInteger(a)) {
//   console.log("La so nguyen");
// } else {
//   console.log("Khong la so nguyen");
// }

// NaN : not a number : mang kieu du lieu so
// console.log(typeof a);

// var b = "a";
// var c = a - b;
// console.log(c);
// NaN xuat hien khi ket qua tinh toan khong thanh cong

// if (Number.isNaN(c)) {
//   console.log("Khong la so ");
// } else {
//   console.log("Day la so");
// }

// if (c === NaN) {
//   console.log("Khong la so ");
// } -> khong so sanh NaN voi NaN

// So Infinity
// console.log(10 / 0);

// c = 1000 ** 1000;

// if (c !== Infinity) {
//   console.log(c);
// } else {
//   console.log("So vuot qua gioi han");
// }

// Ep kieu so nguyen
// var a = "10a123";
// a = parseInt(a); // parse chay tu trai sang va gap ky tu thi dung lai
// console.log(typeof a, a);

// Ep kieu so thuc
// var a = "10110";
// a = parseFloat(a);
// console.log(a);

// Ep kieu so
// var a = "10.4";
// // a = +a;
// a = Number(a);
// console.log(typeof a, a);

// Tong Ket
// var a = 10;
// console.log(2e2);
// if (!isNaN(a) && a !== Infinity && typeof a === "number") {
//   console.log("Day la so");
// } else {
//   console.log("Khong La so");
// }

// Chuyen so thanh chuoi

// var a = 10;
// // a += "";
// a = a.toString();
// console.log(a, typeof a);

// Lam tron va lay so luong phan thap phan
// var a = 10.126;
// console.log(a.toFixed(2));

// var price = 120000000.612;
// price = price.toLocaleString("vi", { style: "currency", currency: "VND" });
// console.log(price);

console.log(Math.pow(10, 2));
