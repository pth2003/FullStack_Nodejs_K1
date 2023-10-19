// regex : biểu thức chính quy
// -> là biểu thức : tập hợp các kí hiệu theo 1 qui tắc nhất định để xử lý chuỗi
//  viết bằng nn Perl
// Tác dụng : so khớp : test() , cắt chuỗi : match(), thay thế replace()

// cú pháp : /bieu_thuc/modifier

//  - bieu_thuc : các kí hiệu của biểu thức chính quy
//  - modifier  : cấu hình cho biểu thwusc chính quy
//  + g -> global
//  + i -> không phân  biệt chữ hoa chữ thường
//  + m -> khớp nhiều dòng
//  + s => khớp 1  dòng
//  các ký hiệu cơ bản
// char : tìm chuỗi char trong chuỗi gốc
// khớp đầu chuỗi : ^
// khớp cuối chuỗi : $
// khớp ký tự đại diện :
//  [A-Z] -> chữ  hoa
// [a-z] -> chữ thường
// 0-9 -> số
// [charList]
// khớp độ dài : mặc  định là  1
// +{min,max} -> độ dài từ min -> max;
// +{min,} -> từ min -> vô cùng

// +{max} -> độ dài cố định

// Ký hiệu viết tắt của độ dài
// {0,1} =>  ?
// {1,} => +
// {0,} => *

// Nếu muốn so khớp các ký hiệu bị trùng với ký hiệu của
// biểu thức chính quy => thêm dấu \ phía trước

// dấu chấm (.)
// dấu ngoặc vuông ([])
// ....

// const str = "hoangan.web@gmail.com";
// // const pattern = /^[a-zA-Z][a-zA-Z0-9]+@[0-9]{3,}/;

// const pattern = /^[a-z][a-z\.0-9-_]{3,}@[a-z-_\.0-9]+\.[a-z]{2,}$/;
// const check = pattern.test(str);
// console.log(check);

// Các ký hiệu viết tắt
// -\d -> [0-9]
// -\D -> các ký tự không phải số
// -\s -> khoảng trắng
// -\S =-> không phải khoảng trắng
// -\w -> A-Z,a-z,0-9, _
// -/W -> ngược lại của trường hợp trên

// Phủ định : dùng dấu ^
// Hoặc : |
// (http|https) : dieu kien hoac

// Kí tự đại diện cho tất cả các ký tự : .

// const str = "https://regex101.com";
// const pattern = /^(http|https):\/\/[a-z-_0-9\.]+\.[a-z]{2,}$/;
// const check = pattern.test(str);
// console.log(check);

// const str = "https://www.youtube.com/watch?v=75x-3Q3TZwg";
// const pattern = /^https:\/\/(www\.)*(youtube.com\/.+|youtu.be\/.+)/;
// const check = pattern.test(str);

// console.log(check);

// Cắt chuỗi
// capturing group : lay 1 phan cua bieu thuc
// (phan-muon-lay)

// const content = "Hello 0327127518, phanhieu 0867713501";

// const pattern = /(0|\+84)\d{9}/g;

// const content = `ABC abc@gmail.com asd phannam@gmail.com acd phantrunghieu1412@gmail.com`;
// const pattern = /[a-z\.0-9-_]{3,}@[a-z-_\.0-9]+\.[a-z]{2,}/g;
// const result = content.match(pattern);

// const domainList = result.map((email) => {
//   const pattern = /([a-z\.0-9-_]{3,})@([a-z-_\.0-9]+\.[a-z]{2,})/;
//   const domain = email.match(pattern);
//   return domain[1];
// });
// console.log(result);

// console.log(domainList);

// non-capturing group
// (?:)
// const url = "https://fullstack.edu.vn/khoa-hoc";

// const pattern = /^(?:http|https):\/\/[a-z-_0-9\.]+\.([a-z]{2,})\/.*$/;

// const result = url.match(pattern);
// console.log(result);

// greedy
// dau ? sau độ dài là greed ví dụ .+?

// const str = ` <img src="https://fullstack.edu.vn/khoa-hoc" alt="anh-khoa-hoc">`;
// const pattern = /<img.*src="(.+?)"/;

// const result = str.match(pattern);
// console.log(result[1]);

// Thay thế :
// 66668888
let content = "sdt1 : 0867713501 , sdt2: +84327127518";

const pattern = /((0|\+84)\d{9})/g;

content = content.replace(pattern, `<a href="tel:$1" data-start:$2>$1</a>`);

console.log(content);
document.body.innerHTML = content;

// Đối sánh chuỗi -> chỉ hoạt động với capturing group

const a = `abc\/\d+`;

const pattern2 = new RegExp(a, "gi");
console.log(pattern2);
