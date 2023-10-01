// Try catch -> xử lý lỗi ngoại lệ (exception)
// var a = 10;
// try {
//   // logic can kiem tra
//   // Neu doan chuong trinh bi loi -> day loi sang
//   // catch va luu thong tin vao bien error
//   //   console.log(a);
//   //   Khong xu ly duoc loi cu phap
//   // Nếu trường hợp là lỗi logic nhưng vẫn muốn đẩy vào ngoại lệ

//   if (a < 20) {
//     throw new Error("Bien a phai lon hon 20");
//   }
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Hoan thanh");
// }
// Thứ tự try => catch => finally
// try, catch chi xay ra 1 trong 2

// async : là 1 func luôn trả về 1 promise

// await : 1 lan = 1 then

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve("Phan Trung Hieu");
//       reject("Loi");
//     }, 1000);
//   });
// };

// // const getName = async () => {
// //   const data = await getData();
// //   console.log(data);
// // };

// // getName();

// (async () => {
//   try {
//     const data = await getData();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("Hoan Thanh");
//   }
// })();

// const getA = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("get A");
//     }, 1000);
//   });
// };
// const getB = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("get B");
//     }, 2000);
//   });
// };
// const getC = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("get C");
//     }, 500);
//   });
// };

// (async () => {
//   const data = await getA();
//   console.log(data);
//   const getb = await getB();
//   console.log(getb);
//   const getc = await getC();
//   console.log(getc);
// })();

// const getRequest = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const reponse = {
//         text: () => {
//           return new Promise((resolve) => {
//             const dataJson = JSON.stringify(data);
//             resolve(dataJson);
//           });
//         },
//         json: () => {
//           return new Promise((resolve) => {
//             resolve(data);
//           });
//         },
//       };
//       const data = {
//         user: "Hieu",
//         email: "abc@gmail.com",
//       };

//       resolve(reponse);
//     }, 1000);
//   });
// };

// getRequest()
//   .then((reponse) => {
//     // console.log(reponse);
//     return reponse.text(); // => data tra ve object
//     // neu tra ve return reponse.text => tra ve json
//   })
//   .then((data) => {
//     console.log(data);
//   });

// (async () => {
//   const reponse = await getRequest();
//   console.log(reponse);
//   console.log(await reponse.text());
//   console.log(await reponse.json());
// })();
