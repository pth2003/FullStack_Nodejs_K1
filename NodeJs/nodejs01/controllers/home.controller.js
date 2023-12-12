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
    res.render("home/index", { title, check, users });
  },
  showProduct: (req, res) => {
    res.render("home/products");
  },
};
export default homeController;
