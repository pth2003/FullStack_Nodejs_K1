const userModel = require("../models/user.model");
const moment = require("moment");
const { object, string } = require("yup");
module.exports = {
  index: async (req, res) => {
    const { status } = req.query; // lay status tu query
    let statusBool;
    if (status === "active" || status === "inactive") {
      statusBool = status === "active" ? true : false;
    }
    const { keyword } = req.query;
    // doc du lieu tu database
    const users = await userModel.all(statusBool, keyword); // truyen status sang model
    const msg = req.flash("msg");
    res.render("users/index", { users, moment, status, keyword, msg });
  },
  add: (req, res) => {
    // const errors = req.flash("errors");
    // console.log(errors);
    console.log(req.errors);
    res.render("users/add", { req });
  },
  handleAdd: async (req, res) => {
    const schema = object({
      name: string().required("Ten bat buoc phai nhap"),
      email: string()
        .required("Email bat buoc phai nhap")
        .email("Email khong dung dinh dang")
        .test("unique", "Email da ton tai tren he thong", async (value) => {
          return await userModel.emailUnique(value);
        }),
    });
    try {
      const body = await schema.validate(req.body, { abortEarly: false });
      body.status = body.status === "1" ? true : false;
      await userModel.create(body);
      req.flash("msg", "Them nguoi dung thanh cong");
      return res.redirect("/users");

      // const result = await userModel.emailUnique(body.email);
      // console.log(result);
    } catch (e) {
      const errors = Object.fromEntries(
        e?.inner.map((item) => [item.path, item.message])
      );
      req.flash("errors", errors);
      req.flash("old", req.body);
    }
    return res.redirect("/users/add");
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    req.session.currentId = id;
    const user = await userModel.find(id);

    if (!user.length) {
      // goi giao dien 404
      next(new Error("404"));
      return;
    }
    user[0].status = user[0].status === true ? "1" : "0";
    req.old = user[0];
    const msg = req.flash("msg");
    res.render("users/edit", { req, msg });
  },
  handleEdit: async (req, res, next) => {
    const { id } = req.params;
    if (+id !== +req.session.currentId) {
      return next(new Error("404"));
    }
    const schema = object({
      name: string().required("Ten bat buoc phai nhap"),
      email: string()
        .required("Email bat buoc phai nhap")
        .email("Email khong dung dinh dang")
        .test("unique", "Email da ton tai tren he thong", async (value) => {
          return await userModel.emailUnique(value, id);
        }),
    });
    try {
      const body = await schema.validate(req.body, { abortEarly: false });
      body.status = body.status === "1" ? true : false;
      await userModel.update(body, id);
      req.flash("msg", "cap nhap nguoi dung thanh cong");

      // const result = await userModel.emailUnique(body.email);
      // console.log(result);
    } catch (e) {
      const errors = Object.fromEntries(
        e?.inner.map((item) => [item.path, item.message])
      );
      req.flash("errors", errors);
      req.flash("old", req.body);
    }
    return res.redirect("/users/edit/" + id);
  },
  delete: async (req, res, next) => {
    const { id } = req.params;
    const status = await userModel.delete(id);
    if (status) {
      req.flash("msg", "Xoa nguoi dung thanh cong");
    } else {
      req.flash("msg", "Xoa khong thanh cong");
    }
    return res.redirect("/users");
  },
};
