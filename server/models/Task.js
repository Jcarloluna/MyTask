const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskTitle: {
    type: String,
  },
  status: {
    type: String,
    enum: ["On Going", "Not Started", "Finished"],
  },
  password: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Task", TaskSchema);
