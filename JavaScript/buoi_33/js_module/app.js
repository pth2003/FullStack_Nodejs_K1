// nguyên tắc gộp import default viêt trước
// đổi tên dùng as
// import tất cả 1 file
import * as home from "./modules/home.js";
const { course, default: getUser, getCourse, user } = home;
console.log(course);
console.log(getUser());
// import getUser, {
//   course,
//   user as nameUser,
//   getCourse,
// } from "./modules/home.js";

// import getUser from "./modules/home.js";
// console.log(getUser());

// import { course, user, getCourse } from "./modules/home.js";

// console.log(course);
// console.log(nameUser);
