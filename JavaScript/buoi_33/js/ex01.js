// Class

// static : dạng tĩnh có thể truy cập không cần thông qua obj
// class Person {
//   constructor(name, email) {
//     // thuoc tinh non-static
//     this.name = name;
//     this.email = email;
//   }
//   //   phuong thuc non-static
//   getEmail() {
//     console.log(this);
//     return this.email;
//   }
//   //   phuong thuc static
//   static getName() {
//     console.log(this);
//     return "F8";
//   }
// }
// const person = new Person("Hieu", "a@gmail.com");
// console.log(person.getEmail());
// console.log(Person.getName());

// Bai tap :
// Tao class User co các thuộc tính :data (chứa danh sách user), name , email, password
// Viết các phương thức xử lý  :
// 1, add - thêm user mới
// 2, getInfo - lấy thông tin user theo id

// Tạo class auth kế thừa từ user xây dụng phương thức tĩnh sau
// - login : trả về id cua user neu thanh cong
// - resgister : trả về thông tin người dùng đăng ký thành công và kiểm tra email tồn tại
// - profile : lấy thông tin theo id

class User {
  constructor() {
    this.data = [];
    this.name = null;
    this.email = null;
    this.password = null;
    this.constructor.self = this;
    // this.data.push(this);
    // console.log(this);
  }
  static self = null;
  isExits(email) {
    return this.data.findIndex(({ email: _email }) => {
      return email === _email;
    });
  }
  add(name, email, password) {
    // this.data.push({ id: this.data.length + 1, name, email, password });
    if (this.isExits(email)) {
      return this.data.push({
        id: this.data.length + 1,
        name,
        email,
        password,
      });
    }
  }
  getInfo(id) {
    return this.data.find(({ id: _id }) => id === _id);
  }
}
class Auth extends User {
  static register(name, email, password) {
    return this.self.add(name, email, password);
  }
  static login(email, password) {
    const user = this.self.data.find((item) => {
      return item.email === email && item.password === password;
    });
    if (user) {
      return user.id;
    }
  }
  //   static profile(id) {
  //     this.self.getInfo(id);
  //   }
}
new Auth();

Auth.register("Hieu", "abc@gmail.com", "123");
Auth.register("Hieu", "abasdac@gmail.com", "!123");
const id = Auth.login("abc@gmail.com", "123");
// console.log(Auth.profile(id));
// Auth.profile(id);

// const user = new User("Hieu", "abc@gmail.com", "123");
// User.add("Hieu", "abc@gmail.com", "123");
// User.add("Hieu", "abc@gmail.com", "113");
// User.add("Hieu", "abc@gmail.com", "143");
// const user = new User();
// user.add("Hieu", "abc@gmail.com", "!123");
// user.add("Hieu", "abasdac@gmail.com", "!123");

// console.log(user.data);
