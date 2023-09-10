/*JSON 
    - là chuỗi
    - dùng để mô tả dữ liệu 1 cách chính xác
    - được dùng để giao tiếp dữ liệu giữa các nền tản với nhau

Ví Dụ : 
    F8 -> app F8
    => chuyển dữ liệu từ F8 thành định dạng chung mà app F8 có thể đọc được(bảo toàn tính toàn vẹn của dữ liệu) => dùng JSON => hầu như các ngôn ngữ đều đọc được và chuyển thành kiểu dư liệu của ngôn ngữ đó

Các thao tác với Json
    1. chuyển từ các kiểu dữ liệu thành JSON : JSON.stringify
    2. chuyển từ JSON thành các kiểu dữ liệu : JSON.parse
Nguyên tắc : 
    key phải nằm trong nháy kép
    kết thúc cặp key - value cuối không được có dấu phẩy
    bắt đầu chuỗi json bằng cặp ngoặc {}

*/
var user = [
  {
    id: 1,
    name: "Hoang",
    email: "abc",
  },
  {
    id: 2,
    name: "Hieu",
    email: "abasdc",
  },
  {
    id: 3,
    name: "Nam",
    email: "affsbc",
  },
];

var json = JSON.stringify(user);
console.log(json);
