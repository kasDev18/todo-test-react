// const express = require('express');

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import todoRoutes from "./routes/todos.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

import Todo from "./models/todos.model.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();


app.use(cors());
app.use(express.json())

app.use("/", todoRoutes);

// app.get("/todos", async(req, res) => {
//     const todos = await Todo.find({});
//     res.status(200).json(todos);
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});