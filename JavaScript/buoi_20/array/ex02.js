// reduce()
/*
    reduce(callback, initialValue) 
    -callback : 2 tham so (pre,current)
    - gia tri khoi tao
*/
// var numbers = [5, 9, 10, 2, 8];
// var result = numbers.reduce(function (prev, current) {
//   return prev + current;
// }, 0);

// console.log(result);

// var result = numbers.reduce(function (prev, current) {
//   return prev < current ? current : prev;
// });
// console.log(result);

// var arr1 = [1, 5, 2, 9];
// var arr2 = [1, 3, 2];
// // Tim phan tu khac giua hai mang
// // => [5,9]

// var result = arr1.reduce(function (prev, current) {
//   if (!arr2.includes(current)) {
//     prev.push(current);
//   }
//   return prev;
// }, []);

// console.log(result);

// var testFunc = function () {
//   console.log(arguments);
//   Array.from(arguments).forEach(function (number) {
//     console.log(number);
//   });
// };
// testFunc(1, 2, 3, 4, 5);

// Ky thuat sao chep mang

// var a = ["Hoang an", 31];

// var b = a.map(function (item) {
//   return item;
// });

// b[0] = "Hoang an F8";

// console.log(a, b);
