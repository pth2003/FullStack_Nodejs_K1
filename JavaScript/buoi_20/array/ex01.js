var users = ["Hieu", "An", "Duong"];
// 1. Fill : cap nhat tat ca gia tri ve 1 phan tu
// users.fill("F8");

// 2. Foreach(callback)
// Duyet tung phan tu cua mang tra ve element va index (trong callback)
// Ham nay khong co gia tri tra ve va khong dung duoc
// users.forEach(function (user, index) {
//   console.log(index, user);
// });

// 3. map(callbackfn)
// tra ve 1 mang moi voi so luong phan tu bang voi mang ban dau
// gia tri cua tung phan tu phu thuoc vao gia tri cua ham callback
// var newArr = users.map(function (user, index) {
//   return `<h2>${index + 1} - ${user}</h2>`;
// });
// var html = newArr.join("");
// document.write(html);

// 4. some()
/*
    - Tra ve true/false
    - tra vef true neu 1 lan lap co gia tri callback la true
*/

// var check = users.some(function (user, index) {
//   if (user === "An") {
//     return true;
//   }
// });

// console.log(check);
// ung dung : kiem tra trong mang sau co so chan khong
// var numbers = [1, 3, 5, 2, 9];
// var soChan = numbers.some(function (number) {
//   return number % 2 === 0;
// });
// console.log(soChan);

// 5. every()
/*
    - Tra ve true/false
    - tra ve true neu tat ca gia tri deu true
    - tra ve false neu tat ca cac phan tu khong return true
*/
// var numbers = [1, 3, 5, 2, 9];
// var check = numbers.every(function (number) {
//   if (number % 2 !== 0) {
//     return true;
//   }
// });

// console.log(check);
// ung dung : checkbox all

// 6. filter()
/*
    - Tra ve 1 mang moi
    - so luong phan tu cua mang moi phu thuoc vao return true cua tung phan tu mang ban dau
    - return true/false
*/

// var result = users.filter(function (user) {
//   if (user === "An") {
//     return true;
//   }
// });
// console.log(result);

var customers = [
  "Luu Anh Quan",
  "Duong Duc Hiep",
  "Do Ha Chi",
  "Mai Viet Hoang",
  "Nguyen Tuan Anh",
  "Nguyen Duy An",
  "Hoang Mai Viet",
];

// // loc danh sach khach hang tren theo tu khoa
var keyword = "hoa";

var result = customers.findIndex(function (customer, index) {
  if (customer.toLowerCase().includes(keyword.toLowerCase())) {
    return true;
  }
});
console.log(result);

// 7. find() : tim dau , tra ve 1 phan cua mang
// 8. findLast():  tim cuoi

// 9. findIndex() : tim index, dua vao dieu kien trong callback , tim ket qua dau
// 10. findLastIndex() :  tim ket qua cuoi
