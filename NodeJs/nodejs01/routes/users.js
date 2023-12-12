import express from "express";
import routerOrders from "./orders.js";
import userController from "../controllers/user.controller.js";
import roleMiddleware from "../middlewares/role.middleware.js";
const router = express.Router();

router.get("/", userController.index);
router.get("/add", userController.add);
router.get("/update/:id", userController.edit);
router.use(roleMiddleware);
router.use("/orders", routerOrders);
export default router;
