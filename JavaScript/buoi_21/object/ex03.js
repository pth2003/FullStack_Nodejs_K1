// Tao ra 1 ban thiet ke => Khi khoi tao obj lay ban thiet ke do thay du lieu

// Ham tao
// Dinh nghia ham tao
var Person = function (name, email, age) {
  // Dinh nghia cac thuoc tinh
  this.name = name;
  this.email = email;
  this.age = age;
  var current = this;
  this.getName = function () {
    return current.name;
  };
};

// Person.prototype.getMessage = function () {
//   return "Fullstack K1";
// };
// // Khoi tao doi tuong
var person = new Person("Trung Hieu", "hieu@gmail.com", 20);
console.log(person.constructor.name);
// // console.log(person.getMessage() + " " + person.name);

// var user = new Person("Nguyen Duong", "aaa@gmail.com", 19);

// // console.log(user);
// // console.log(user.getMessage() + " " + user.name);
// // this trong prototype => tra ve obj hien tai
// Array.prototype.getMsg = function () {
//   console.log(this);
//   console.log("F8");
// };

// var users = ["An", "Duong"];
// users.getMsg();

// Tao 1 ham noi bo tu 1 ham tao
Person.isPerson = function () {
  console.log("F8");
};
