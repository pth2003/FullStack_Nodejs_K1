const moment = require("moment");
const model = require("../models/index");
const { Op } = require("sequelize");
const { count, log } = require("console");
const courseUtils = require("../utils/course.utils");
const User = model.User;
const Group = model.Group;
const Course = model.Course;
module.exports = {
  index: async (req, res) => {
    const { status, keyword, group } = req.query;
    const filter = {
      // deleted_at: {
      //   [Op.not]: null,
      // },
    };
    if (status === "active" || status === "inactive") {
      filter.status = status === "active" ? true : false;
    }
    if (keyword) {
      //   filter.email = {
      //     [Op.like]: `%${keyword}%`,
      //   };
      filter[Op.or] = [
        {
          name: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          email: {
            [Op.iLike]: `%${keyword}%`,
          },
        },
      ];
    }
    if (group) {
      filter.group_id = group;
    }
    const { page = 1 } = req.query;
    const offset = (page - 1) * 3;
    const { rows: users, count } = await User.findAndCountAll({
      order: [["id", "asc"]],
      where: filter,
      // paranoid: false,
      limit: 3,
      offset,
      include: [
        {
          model: model.Phone,
          as: "phones",
        },
        {
          model: model.Group,
          as: "group",
        },
      ],
    });
    const totalPage = Math.ceil(count / 3);
    const groups = await Group.findAll({
      order: [["name", "asc"]],
    });
    // console.log(count); -> số lượng bản ghi trước khi limit
    res.render("users/index", { users, moment, totalPage, page, groups, req });
  },
  add: async (req, res) => {
    const courses = await Course.findAll({
      order: [["name", "asc"]],
    });
    res.render("users/add", { courses });
  },
  handleAdd: async (req, res, next) => {
    const body = req.body;
    const courses = !Array.isArray(body.courses)
      ? [body.courses]
      : body.courses;
    try {
      const user = await User.create({
        name: body.name,
        email: body.email,
        status: +body.status === 1,
      });
      if (user) {
        if (courses.length) {
          for (let i = 0; i < courses.length; i++) {
            const course = await Course.findByPk(courses[i]);
            await user.addCourse(course);
          }
        }
        return res.redirect("/users");
      }
    } catch (e) {
      return next(e);
    }
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findOne({
        where: { id },
        include: {
          model: Course,
          as: "courses",
        },
      });

      if (!user) {
        throw new Error("User khong ton tai");
      }
      // const Phones = await user.getPhone();
      // const phone = Phones.phone;
      // console.log(phone);

      // const phone = await model.Phone.findOne({
      //   where: {
      //     phone: "0123456789",
      //   },
      // });
      // const userByPhone = await phone.getUser();
      // console.log(userByPhone);
      const courses = await Course.findAll({
        order: [["name", "asc"]],
      });

      res.render("users/edit", { user, courses, courseUtils });
    } catch (e) {
      return next(e);
    }
  },
  handleEdit: async (req, res, next) => {
    const { id } = req.params;

    const body = req.body;
    const courses = !Array.isArray(body.courses)
      ? [body.courses]
      : body.courses;
    const status = await User.update(
      { name: body.name, email: body.email, status: +body.status === 1 },
      {
        where: { id },
      }
    );
    if (status && courses.length) {
      const courseRequest = await Promise.all(
        courses.map((courseId) => Course.findByPk(courseId))
      );
      const user = await User.findByPk(id);
      await user.setCourses(courseRequest);
    }
    return res.redirect("/users/edit/" + id);
  },
  delete: async (req, res) => {
    // Xoa mem
    // Xoa vinh vien force : true
    const { id } = req.params;
    await User.destroy({ where: { id } });
    return res.redirect("/users");
  },
};
// phan trang
/*
  Thuật toán phân trang : 
  - lấy được tổng số bản ghi (Bao gồm cả kết quả lọc)
  - xác định giới hạn bản ghi trên 1 trang  - limit 
  - tính tổng số trang : tổng số bản ghi / limit => làm tròn lên math.cell
  - tính offset dựa vào page : offset = (page - 1 )* limit
  - đưa limit, offset vào query (sql,orm) 
  - xử lý hiển thị : Danh sách , phân trang 
*/
