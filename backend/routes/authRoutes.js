import express from "express";
import { signup, login } from "../controllers/authController.js";
import {
  signupRules,
  loginRules,
  handleValidation,
} from "../middleware/validate.js";

const router = express.Router();

router.post("/signup", signupRules, handleValidation, signup);
router.post("/login", loginRules, handleValidation, login);

export default router;
