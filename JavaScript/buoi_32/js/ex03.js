// Enhance Object

// biến bắt buộc tồn tại
// không có giá trị thì giá trị là undefined
// const name = "Hieu";
// const email = "abc";
// const address = "Ha Noi";
// const user = {
//   name,
//   email,
//   location: address, // trường hợp muốn đổi tên thuộc tính thi khai báo như bình thường
// };

// console.log(user);

// const getInfo = ({ name, email }) => {
//   console.log(name, email);
// };

// getInfo(user);

// CLASSES

// class User {
// khai bao constructor
// Dung de khai bao cac thuoc tinh va cac gia tri khoi tao
// Chay dau tien khi Object duoc khoi tao
//   constructor(name, email) {
//     // Dinh nghia thuoc tinh
//     this.name = name;
//     this.email = email;

//     // Cac gia tri khoi tao
//   }

//   // cac phuong thuc
//   getName() {
//     return this.name;
//   }
//   getEmail() {
//     return this.email;
//   }
// }

// User.prototype.msg = "Message";
// var user = new User("Hieu", "abc@gmail.com");
// console.log(user);
// console.log(user.name);
// console.log(user.getName());
// console.log(user.msg);

// class Authentication extends User {
//   constructor(name, email, age) {
//     super(name, email);
//     this.age = age;
//   }
//   getUser() {
//     return { name: this.name, email: this.email };
//   }
// }
// const auth = new Authentication("Hieu", "abc@gmail.com", 20);
// console.log(auth);

// This trong class
const root = document.querySelector("#root");

class Counter {
  constructor() {
    this.count = 0;
    this.h1 = null;
  }
  handleIncrement = () => {
    this.count++;
    this.h1.innerText = this.count;
  };
  render() {
    this.h1 = document.createElement("h1");
    this.h1.innerText = this.count;
    const btn = document.createElement("button");
    btn.innerText = "+";
    btn.addEventListener("click", this.handleIncrement);
    root.append(this.h1);
    root.append(btn);
  }
}

new Counter().render();
