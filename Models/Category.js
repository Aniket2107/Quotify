const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      unique: true,
      required: true,
    },
    background: {
      type: String,
      default: "blue",
    },
    count: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
