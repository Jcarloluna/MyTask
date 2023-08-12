const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskTitle: {
    type: String,
  },
  taskDescription: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  priority: {
    type: String,
    enum: ["High Priority", "Mid Priority", "Low Priority"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
