import { object, string } from "yup";
import { getError } from "../utils/validate.js";
const authController = {
  login: function (req, res) {
    // console.log("get form");
    // Flash session
    const errors = req.flash("errors");
    // const errorName = req.flash("errorName");
    // const errorPass = req.flash("errorPass");
    res.render("auth/login", {
      layout: "layouts/layout.auth.ejs",
      errors,
      getError,
    });
  },
  handleLogin: async (req, res) => {
    const { email, password } = req.body;
    const schema = object({
      email: string()
        .required("email bat buoc nhap")
        .email("khong dung dinh dang"),
      password: string().required("mat khau bat buoc nhap"),
    });
    try {
      const data = await schema.validate(req.body, {
        abortEarly: false, // tra ve tat car loi
      });
    } catch (e) {
      const errors = Object.fromEntries(
        e.inner.map(({ path, message }) => [path, message])
      );
      console.log(errors);
      req.flash("errors", errors);
      // console.log(e.inner[0].path, e.inner[0].message);
      // console.log(e.inner[1].path, e.inner[1].message);
    }
    // const errors = {};
    // if (!email) {
    //   errors.email = "email bat buoc phai nhap";
    // }
    // if (!password) {
    //   errors.password = "pass bat buoc phai nhap";
    // }
    // req.flash("errors", errors);
    // if (data.email !== "" && data.password !== "") {
    //   req.flash("msg", "DANG NHAP THANH CONG");
    // } else if (data.email === "") {
    //   req.flash("errorName", "Email khong duoc bo  trong");
    // } else if (data.password === "") {
    //   req.flash("errorPass", "Password khong duoc bo trong");
    // } else {
    //   req.flash("msg", "Email va Pass khong duoc bo trong");
    // }
    return res.redirect("/dang-nhap");
    // return res.json(data);
  },
};

export default authController;
