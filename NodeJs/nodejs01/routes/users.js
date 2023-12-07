import express from "express";
import routerOrders from "./orders.js";
const router = express.Router();

router.get("/", (req, res) => {
  const { status, keyword } = req.query; //query string
  res.send(
    `<h1>DANH SACH NGUOI DUNG</h1> status =  ${status} va keyword =  ${keyword}`
  );
});
router.get("/add", (req, res) => {
  res.send("<h1>THEM NGUOI DUNG</h1>");
});
router.get("/update/:id", (req, res) => {
  const id = req.params.id; // tham so dong
  res.send(`<h1>SUA NGUOI DUNG ${id} </h1>`);
});
router.use("/orders", routerOrders);
export default router;
