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
    res.send("<h1>Hello World!</h1>");
  },
  showProduct: (req, res) => {
    res.send("<h1>San pham</h1>");
  },
};
export default homeController;
