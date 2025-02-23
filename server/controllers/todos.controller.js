import bcrypt from "bcryptjs";
import generateToken from "../utils/token.js";

import Todo from "../models/todos.model.js";

export const todos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    res.status(200).json(todos);
    // res.send(todos);
  } catch (error) {
    console.log("Error in todos controller", error.message);
    res.status(401).json({
      response: "Internal Server Error",
      success: false,
    });
  }
};

export const read = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    // console.log(req.params.id);
    res.status(200).json(todo);
  } catch (error) {
    console.log("Error in read controller", error.message);
    res.status(401).json({
      response: "Internal Server Error",
      success: false,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { title } = req.body;
    const todo = new Todo({
      title,
    });
    generateToken(todo._id, res);
    await todo.save();
    res.status(201).json({
      response: "Todo created successfully",
      success: true,
    });
    // res.redirect("http://localhost:5173/");
  } catch (error) {
    console.log("Error in create controller", error.message);
    res.status(401).json({
      response: "Internal Server Error",
      success: false,
    });
  }
};

export const edit = async (req, res) => {
  try {
    const { id, title } = req.body;
    // console.log(req.body);

    if (title === "") {
      return res.status(400).json({
        response: "Title is required",
        success: false,
      });
    } else {
      const todo = await Todo.findByIdAndUpdate(id, { title }, { new: true });
      generateToken(todo._id, res);
      res.status(201).json({
        response: "Todo updated successfully",
        success: true,
      });
    }
  } catch (error) {
    console.log("Error in edit controller", error.message);
    res.status(401).json({
      response: "Internal Server Error",
      success: false,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    generateToken(todo._id, res);
    res.status(201).json({
      response: "Todo deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error in remove controller", error.message);
    res.status(401).json({
      response: "Internal Server Error",
      success: false,
    });
  }
};
