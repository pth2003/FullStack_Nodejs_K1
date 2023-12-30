/*
Controller : 
    - Ten controller
    - Action : là các hành động 

    -> ví dụ controller user sẽ có các action : thêm sửa xóa 

*/
const homeController = {
  index: (req, res) => {
    // tiep nhan req
    // xu ly du lieu cua req
    // truy van voi database -> thong qua model
    // tra ve response
    // res.send("<h1>Hello World!</h1>");
    const title = "<span>hoc back-end asdsadsad</span";
    const check = true;
    const users = ["user1", "user2", "user3"];
    // set session
    req.session.message = "Hello F8";
    req.session.user = {
      name: "hieu",
      email: "abc@gmail.com",
    };
    delete req.session.message;
    res.render("home/index", { title, check, users });
  },
  showProduct: (req, res) => {
    console.log(req.session.message);
    console.log(req.session.user);
    res.render("home/products");
  },
};
export default homeController;
