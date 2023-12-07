import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>DANH SACH DON HANG</h1>");
});
router.get("/completed", (req, res) => {
  res.send("<h1>DANH SACH DON HANG HOAN THANH</h1>");
});
router.get("/cancel", (req, res) => {
  res.send("<h1>DANH SACH DON HANG HUY</h1>");
});

export default router;
