Array.prototype.map2 = function (callbackfn) {
  if (typeof callbackfn !== "function") {
    return;
  }
  var array = this;
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    var result = callbackfn(element, i);
    newArr[newArr.length] = result;
  }
  return newArr;
};
// code lai filter, find
// console.log(Array.prototype.map());
var users = ["User 1", "User 2", "User 3"];

var newArr = users.map2(function (user, index) {
  return `<h2>${index + 1} - ${user}</h2>`;
});
// console.log(newArr);

var obj1 = {
  name: "Trung Hieu",
  email: "phantrunghieu1412@gmail.com",
};
var obj2 = {
  age: 20,
  address: "Ha noi",
};

// for (var i = 0; i < Object.keys(obj2); i++) {
//   obj1.Object.keys(obj2)[i] = obj2[i];
// }
// console.log(Object.prototype);
// Object.keys(obj2).forEach(function (key, index) {
//   console.log(key, index);
//   obj1[key] = obj2[key];
// });
// console.log(obj1);
// var obj3 = Object.assign(obj1, obj2); // Noi object
// console.log(obj1);
// console.log(obj3);

// Tao object khong co prototype
// Object.create(null);
// var user = Object.create(null);
// console.log(user);

// Tham Chiếu
// var a = {
//   name: "abc",
//   email: "abc@gmail.com",
// };
// // sao chep obj
// var b = Object.assign({}, a);
// b.name = "F8";
// console.log(a, b);

// Optional chaining (?.)

var a = {
  name: "Hieu",
  getName1: function () {
    return "abc";
  },
};
// Voi thuoc tinh
console.log(a.getName?.()); // optional chaining voi phuong thuc

var users = "F8";
if (users?.length) {
  users.forEach?.(function (user) {
    console.log(user);
  });
}
