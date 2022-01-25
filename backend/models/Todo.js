const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: String,
    default: false,
  },
});

module.exports = mongoose.model("Todos", PostSchema);
