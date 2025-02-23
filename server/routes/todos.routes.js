import express from "express";

import { todos, create, read, edit, remove } from "../controllers/todos.controller.js";

const router = express.Router();

router.get("/", todos);

router.get("/read/:id", read);

router.post("/create", create)

router.patch("/edit", edit)

router.delete("/delete/:id", remove)

export default router;