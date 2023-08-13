var users = {
  name: "Phan Hieu",
  email: "abc@gmail.com",
  address: "Ha Noi",
  job: "Sinh Vien",
  getName: function () {
    return this.name;
  },
  getEmail: function () {
    return this.email;
  },
  getInfo: function () {
    return `Ten : ${this.name}, Email : ${this.email}, Dia chi : ${this.address}`;
  },
  jobs: {
    name: "Giang Vien",
    salary: 5000000,
    currency: "VND",
    per: "Thang",
    histories: [
      {
        year: 2020,
        name: "Cong viec 1 ",
      },
      {
        year: 2021,
        name: "Cong viec 2 ",
      },
      {
        year: 2022,
        name: "Cong viec 3 ",
      },
    ],
  },
};

// console.log(users.getInfo());
console.log(users.jobs.histories[0]);
console.log(users.jobs.histories[1]);
