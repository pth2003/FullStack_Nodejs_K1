/*
    Middleware laf 1 func cos 3 tham số

    -req : obj
    -res : obj
    -next : hàm 

*/

const authMiddleware = (req, res, next) => {
  const isLogin = true;
  if (!isLogin) {
    res.redirect("/dang-nhap");
  }
  next(); // cho phep req di tiep
};

export default authMiddleware;
