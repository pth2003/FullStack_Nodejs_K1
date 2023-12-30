import express from "express";
import authController from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/dang-nhap", authController.login);

// https post
router.post("/dang-nhap", authController.handleLogin);

export default router;
