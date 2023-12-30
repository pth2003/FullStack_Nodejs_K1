var express = require("express");
var router = express.Router();
const db = require("../utils/db.js");
/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const users = await db`select * from users`;
    console.log(users);
  } catch (e) {
    console.log(e);
    // if (e.errors[0].message && e.errors) {
    //   console.log(e.errors[0].message);
    // } else {
    //   console.log(e.message);
    // }
  }
  res.render("index", { title: "Express" });
});

module.exports = router;
