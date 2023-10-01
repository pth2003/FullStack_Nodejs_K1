// template string
// const html = `
//     <p>Hello F8</p>
// `;

// const html = function (strings, personExp, ageExp) {
//   console.log(strings);
//   console.log(personExp);
//   console.log(ageExp);
// };

// const person = "Hieu";
// const age = 12;

// const output = html`Toi ten la ${person}, toi ${age} tuoi`;

//Xử lý bất đồng bộ

/*
    3 cach xu ly bat dong bo 
    
    1. callback

    2. promise 

    3. asynx await function
*/

// 1 : callback

// const getUsers = (callback) => {
//   setTimeout(() => {
//     console.log("Danh sach nguoi dung");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1000);
// };

// const showMessage = () => {
//   console.log("Lay du lieu thanh cong");
// };

// getUsers(showMessage);

// 2 :  Promise : la 1 OBJECT

// tao ra 1 obj promise
//  promise có 3 trạng thái
// - pending
// - fulfilled (resolve)
// - reject

// const getUsers = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = [
//         {
//           name: "hieu",
//           email: "abc@gmail.com",
//         },
//       ];

//       resolve(data);
//       reject("Lỗi kết nối");
//     }, 1000);
//   });
//   return promise;
// };

// const showMessage = () => {
//   console.log("Lay du lieu thanh cong");
// };
//  then để gọi resolve
// catch để gọi reject
// getUsers()
//   .then((user) => {
//     console.log(user);
//     showMessage();
//   })
//   .catch((user) => {
//     console.log(user);
//   });
// console.log(getUsers());

// promise chaining :

// const getA = function () {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("GetA");
//     }, 1000);
//   });
// };

// const getB = function () {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("GetB");
//     }, 2000);
//   });
// };

// const getC = function () {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("GetC");
//     }, 1500);
//   });
// };
// Khong duoc viet nhu duoi
// getA().then((data) => {
//   console.log(data);
//   getB().then((data) => {
//     console.log(data);
//   });
// });

// getA()
//   .then((data) => {
//     console.log(data);
//     return getB();
//   })
//   .then((data) => {
//     console.log(data);
//     return getC();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .finally(() => {
//     console.log("Da tai xong");
//   });

// Buổi 34 :

const lists = [1, 2, 3];
const getUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      users = [
        { id: 1, name: "User 1", salary: 1000 },
        { id: 2, name: "User 2", salary: 2000 },
        { id: 3, name: "User 3", salary: 3000 },
      ];
      const user = users.find(({ id: _id }) => {
        return _id === id;
      });
      resolve(user);
    }, 1000);
  });
};
// let total = 0;
// lists.forEach((id) => {
//   getUser(id).then((data) => {
//     // console.log(data);
//     total += data.salary;

//     if (id === lists.length) {
//       console.log(total);
//     }
//   });
// });

// let total = 0;
// const getSalary = async () => {
//   for (let id of lists) {
//     const user = await getUser(id);
//     console.log(user);
//     total += user.salary;
//   }

//   console.log(total);
// };
// getSalary();

const requests = lists.map(async (id) => await getUser(id));
// console.log(requests);

Promise.all(requests).then((user) => {
  const total = user.reduce((prev, current) => prev + current.salary, 0);
  console.log(total);
});
