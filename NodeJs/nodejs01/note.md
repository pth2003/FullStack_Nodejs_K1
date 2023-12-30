# cách làm việc với request - response theo cơ chế server-side (mvc)

- view chỉ được vào Method GET
- logic: viết ở post, put, patch, delete --> redirect về get để hiển thị giao diện
  Lưu ý : Tuyệt đối không được gọi giao diện vào các phương thức trên

Có 2 cách để gửi mes giữa các req

- cách 1: dùng search params
- cách 2: dùng session (flash session)

- Session : phiên lưu trữ
