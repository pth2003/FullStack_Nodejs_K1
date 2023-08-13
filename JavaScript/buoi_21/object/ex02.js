Object.prototype.combine = function (...args) {
  var result = [];
  var current = this;
  if (args.length) {
    args.forEach(function (arg) {
      result.push(current[arg]);
    });
  }
  return result;
};
// console.log(Object.prototype);
var users = {
  name: "Phan Hieu",
  email: "phantrunghieu1412@gmail.com",
  address: "Ha Noi",
  job: "Sinh Vien",
};

// console.log(users.combine("name", "email", "address"));

var customer = {
  fullName: "Dang Van Cong",
  age: " 31",
  address: "Vinh Phuc",
};
// console.log(customer.combine("fullName", "age"));
