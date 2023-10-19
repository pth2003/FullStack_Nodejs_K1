// storage

// 1: localStorage -> lưu trữ vô thời hạn
// localStorage.setItem("key","value") : chỉ lưu trữ text => dùng JSON
// localStorage.getItem : lấy giá trị
// localStorage.removeItem() : xóa giá trị
// localStorage.clear() : xóa tất cả

// 2: sessionStorage -> lưu trữ theo phiên (tắt trfinh duyệt là xóa)
// => tương tự local

// 3: cookie -> lưu trữ theo phiên,thời gian

// if (typeof Storage !== undefined) {

// }
// sessionStorage.setItem("username", "trung hieu");

// cookie => tự động đính kèm  vào http request(điêu kiện dùng trình duyệt)
// 1. set
// chỉ chấp nhận dạng thời gian UTC

const expire = new Date("2023-10-18 09:00:00").toUTCString(); // la 1 object
console.log(expire);
document.cookie = `username=trunghieu;expires=${expire}`;
// 2. đọc cookie
console.log(document.cookie);

// 3. cập nhật cookie
// set lại giá trị
// 4. xóa cookie => cập nhật thời gian lùi về  quá khứ

// http only -> chi cho phép backend lấy cookie (lấy thông qua http)
// secure -> chỉ thao tác với được cookie nếu sử dụng https
