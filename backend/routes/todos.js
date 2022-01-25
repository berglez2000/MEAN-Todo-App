const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.get("", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ todos });
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const newTodo = new Todo({
    todo: req.body.todo,
    completed: req.body.completed,
  });

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Succesfully deleted" });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
