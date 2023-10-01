/*
    Muốn import từ file khác vào thì file cần import phải export
  - Có 2 loại import,export 
  + default
  + named
*/
// export default :  trong 1 file chi co 1 export default

const user = {
  name: "asd",
  email: "adsadad",
};
// export default getUser;
// cach dưới chi ap dung class hoac func truyen thong
export default function getUser() {
  return user;
}

const course = {
  name: "full stack",
};
export const getCourse = () => {
  return course;
};
// export named;
export { user, course };
