// console.log(Array.prototype);

var users = ["an", "duong", "duc"];

// 1. at
// console.log(users.at(0));

// 2. concat(arr2,arr3) : nối mảng
// console.log(users.concat([1, 2, 3]));

// 3. indexOf() : tim vi tri xuat hien cua phan tu trong mang
// console.log(users.indexOf("hieu"));
// 4. lastIndexOf(value) : tim vi tri cuoi cung

// 5. include : tim phan tu trong mang va tra ve true/false

// 6. slice(start,end) : cắt mảng
// console.log(users.slice(1, 2));

// 7. join : nối các phần tử mảng thành chuỗi
// console.log(users.join(" "));

// bai tap tach ten :
// var fullname = "Ta Hoang An";
// // console.log(fullname.slice(fullname.lastIndexOf(" ")));
// var name = fullname.split(" ").slice(-1).join();
// console.log(name);

// => hàm trên không làm thay đổi mảng ban đầu
// 8. push() => them phan tu vao cuoi mang
// var count = users.push(1, 2, 3);
// console.log(count, users);

// 9. unshift : them phần tử vào đầu mảng và trả về số lượng mảng

// 10. pop() : xoa phan tu cuoi mang va tra ve gia tri phan tu vua xoas

// var value = users.pop();
// console.log(value);

// 11. shift : xoa phan tu dau bang va tra ve gia tri phan tu vua xoa
// 12. splice(index,number) : xoa number phan tu tu vi tri index trong mang
// users.splice(1, 1, "Hieu"); // vua xoa vua them phan tu moi tai vi tri xoa

// 13. reverse() :  dao nguoc mang
// 14. sort() : sap xep mang theo tang dan : chi ap dung voi chuoi

// var number = [1, 4, 5, 1, 8];
// number.sort(function (a, b) {
//   if (b > a) {
//     return -1;
//   }
// });
// Tham so thu nhat la phan tu sau , tham so thu hai la phan tu truoc, return ve so am thi se doi cho
// console.log(number);

var customers = [
  "Ta Hoang An",
  "Nguyen Van Yen",
  "Mai Thi Dung",
  "Nguyen Thi Tam",
];
var getFirstName = function (fullname) {
  return fullname.split(" ").slice(-1).join();
};
customers.sort(function (a, b) {
  if (getFirstName(a) < getFirstName(b)) {
    return -1;
  }
});
console.log(customers);
// var nameCutomers = [];
// for (var index in customers) {
//   nameCutomers[index] = customers[index].split(" ").slice(-1).join();
// }
// console.log(customers);
// console.log(nameCutomers.sort());

// console.log(users);
