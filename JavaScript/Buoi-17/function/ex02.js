// Ham con , closure;

//  bien cuc bo cua ham con => bien cuc bo cua ham cha => bien toan cuc
// hàm cục có thể sử dụng được
// var getMessage = function (msg) {
//   var msgvalue = msg + " toi";
//   // bien cuc bo cua ham cha
//   var display = function () {
//     var a = 10;
//     // bien cuc bo cua ham con
//     console.log(msgvalue);
//     console.log("F8 " + msg);
//   };
//   display();
// };
// getMessage("Fullstack");

//closure
// var sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

// var add = sum(10);
// console.log(add);
// console.log(add(20));

// Giải thuật đệ quy :
function total(n) {
  if (n === 1) {
    return 1;
  }
  return n + total(n - 1);
}
console.log(total(10));

//Hien thi so fibonanci tai vi tri n
var fibonanci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonanci(n - 1) + fibonanci(n - 2);
};
console.log(fibonanci(5));
