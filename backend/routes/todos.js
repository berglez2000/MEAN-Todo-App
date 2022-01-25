const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.get("", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const newTodo = new Todo({
    todo: req.body.todo,
    completed: false,
  });

  try {
    newTodo.save();
    const allTodos = await Todo.find();
    res.status(201).json(allTodos);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    Todo.deleteOne({ _id: req.params.id });
    const allTodos = Todo.find();
    res.status(201).json(allTodos);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id", async (req, res) => {
  const updatedTodo = new Todo({
    _id: req.body._id,
    todo: req.body.todo,
    completed: req.body.completed,
  });

  try {
    await Todo.updateOne({ _id: req.params.id }, updatedTodo);
    res.status(201).json({ message: "Updated Succesfully" });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
