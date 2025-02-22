import express from "express";

import { todos } from "../controllers/todos.controller.js";

const router = express.Router();

router.get("/todos", todos);

export default router;