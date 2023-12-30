const userModel = require("../models/user.model");
const moment = require("moment");
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

    res.render("users/index", { users, moment });
  },
};
