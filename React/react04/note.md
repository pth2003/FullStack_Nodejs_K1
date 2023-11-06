# vấn đề :

- chia sẻ state giữa các component
- dữ liệu dùng chung giữa các component -> thông tin sau khi đăng nhập

# giải pháp :

- localState => dùng useState
- globalState => dùng context api + useReducer , thư viện bên ngoài Redux

-> muốn lấy dữ liệu context phải import hai thứ
-> gom thành 1 hook mới -> tạo thành hàm bắt đầu bằng use
