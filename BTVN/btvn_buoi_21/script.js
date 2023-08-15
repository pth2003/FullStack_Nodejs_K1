var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    required: "Vui lòng nhập địa chỉ email",
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

var getError = function (feild) {
  return Object.values(errors[feild])[0];
};
console.log(getError("name"));
console.log(getError("email"));

// Bai 2 :
var Customer = function (name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
};
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customers) {
  var newArr = customers.map(function (customer) {
    var firstName = customer.name.slice(0, customer.name.indexOf(" "));
    var lastName = customer.name.slice(customer.name.lastIndexOf(" ") + 1);
    var newCustomer = new Customer(
      customer.name,
      customer.age,
      customer.address
    );
    newCustomer.shortName = firstName + " " + lastName;
    return newCustomer;
  });

  newArr.sort(function (a, b) {
    if (a.age < b.age) {
      return -1;
    }
  });
  return newArr;
}

var result = createCustomers(customers);
console.log(result);

// Bai 3 :
var User = function (name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
};

var data = [];
function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    console.log("Ban chua nhap du cac truong");
    return;
  }
  var newUser = new User(name, password, email);
  newUser.role = "user";
  if (data.length === 0) {
    data.push(newUser);
  } else {
    for (var i = 0; i < data.length; i++) {
      if (data[i].email === email) {
        console.log("Dia chi email da ton tai");
        return;
      }
    }
    data.push(newUser);
  }

  return data;
}
handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
handleRegister("Nguyen Van B", "123456", "nguyenvanb@email.com");
handleRegister("Nguyen Van B", "123456", "nguyenvanb@email.com");
handleRegister("Phan Trung Hieu");
console.log(data);

function handleLogin(email, password) {
  var dataLogin = data.filter(function (user) {
    return user.email === email && user.password === password;
  });
  if (dataLogin.length === 0) {
    console.log("Khong ton tai tai khoan");
    return;
  }
  return dataLogin;
}
console.log(handleLogin("nguyenvana@email.com", "123456"));
console.log(handleLogin("Phan Trung Hieu", "12345"));
