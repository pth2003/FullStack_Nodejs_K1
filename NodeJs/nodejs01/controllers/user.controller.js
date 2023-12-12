const userController = {
  index: (req, res) => {
    const { status, keyword } = req.query; //query string
    /*  Request : - Nhận thông tin 
                  - Validate
         
        Model : Xử lý dữ liệu 

        Xử lý logic nghiệp vụ (nếu có)
        
        View : Trả dữ liệu cho client
    */
    res.render("users/index", { status, keyword });
  },
  add: (req, res) => {
    res.send("<h1>THEM NGUOI DUNG</h1>");
  },
  edit: (req, res) => {
    const id = req.params.id; // tham so dong
    res.send(`<h1>SUA NGUOI DUNG ${id} </h1>`);
  },
  orderList: (req, res) => {
    res.send("<h1>DANH SACH DON HANG</h1>");
  },
  orderCompleted: (req, res) => {
    res.send("<h1>DANH SACH DON HANG HOAN THANH</h1>");
  },
  orderCancel: (req, res) => {
    res.send("<h1>DANH SACH DON HANG HUY</h1>");
  },
};

export default userController;
