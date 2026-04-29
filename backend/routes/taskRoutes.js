import express from "express";
import auth from "../middleware/authMiddleware.js";
import { taskRules, handleValidation } from "../middleware/validate.js";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.use(auth);

router.get("/", getTasks);
router.post("/", taskRules, handleValidation, createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
