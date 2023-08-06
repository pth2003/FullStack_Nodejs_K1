// chuoi
// var fullName = "Hoang an";
// console.log(fullName.length);
// kiem tra 1 chuoi
// if (typeof fullName === "string") {
//   console.log("Day la chuoi ");
// } else {
//   console.log("day khong la chuoi");
// }

// var fullName2 = String("Hieu");
// console.log(fullName2);
// console.log(typeof fullName2);

// var fullName3 = new String("Hieu");
// console.log(fullName3);
// console.log(typeof fullName3);

// String => hàm tạo => dùng để tạo ra các object liên quan tới chuỗi
// Việc tạo ra các phương thức thuộc tính đó => sử dụng thông qua prototype (kế thừa phương thức và thuộc tính)
// Khi 1 biến có kiểu dữ liệu là string => tạo ra 1 object tạm thời để truy cập các phương thức của String

// Các phương thức xử lý chuỗi
// var str = "Xin chao F8";

// // 1. length
// console.log(str.length);

// // 2. charAt : lay 1 ki tu theo index
// console.log(str.charAt(0));

// console.log(str.charAt(str.length - 1));

// // 3. charAtCode(index)
// console.log(str.charCodeAt(8));
// // 4. slice(start , end) : cat chuoi
// console.log(str.slice(-2));
// // 5. index of(subStr) : tra ve vi tri dau tien tim duoc
// console.log(str.indexOf("f8"));

// // bai tap :
// var mail = "Phantrunghieu1412@gmail.com";
// console.log(mail.slice(0, mail.indexOf("@")));

// 6. include(subStr)
// 7. concat : noi chuoi
// 8. replace(tucantim, tuthaythe)
// 9. replaceAll : thay the tat ca
// 10. split(char) :tách chuỗi thành mảng
// 11. trim() : loại bỏ khoảng trắng đầu và cuối chuỗi
// 12. trimStart()
// 13. toLowerCase
// 14. toUpperCase

var welcome = "Chao mung ban den voi F8";

var first = welcome.slice(0, welcome.indexOf(" "));
var end = welcome.slice(welcome.lastIndexOf(" ") + 1);

var center = welcome.slice(welcome.indexOf(" "), welcome.lastIndexOf(" ") + 1);
var newWelcome = end.concat(center, first);

console.log(newWelcome);
