import bcrypt from "bcryptjs";
import generateToken from "../utils/token.js";

import Todo from "../models/todos.model.js";

export const todos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
    // res.send(todos);
  } catch (error) {
    console.log("Error in todos controller", error.message);
    res.status(401).json({ error: "Internal Server Error" });
  }
};