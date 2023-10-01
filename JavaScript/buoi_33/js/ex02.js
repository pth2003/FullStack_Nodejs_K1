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

const getUsers = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        {
          name: "hieu",
          email: "abc@gmail.com",
        },
      ];

      resolve(data);
      reject("Lỗi kết nối");
    }, 1000);
  });
  return promise;
};

const showMessage = () => {
  console.log("Lay du lieu thanh cong");
};
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

const getA = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("GetA");
    }, 1000);
  });
};

const getB = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("GetB");
    }, 2000);
  });
};

const getC = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("GetC");
    }, 1500);
  });
};
// Khong duoc viet nhu duoi
// getA().then((data) => {
//   console.log(data);
//   getB().then((data) => {
//     console.log(data);
//   });
// });

getA()
  .then((data) => {
    console.log(data);
    return getB();
  })
  .then((data) => {
    console.log(data);
    return getC();
  })
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("Da tai xong");
  });
