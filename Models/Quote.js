const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
      required: true,
    },
    //Todo
    category: {
      type: Array,
      default: [],
    },
    author: {
      type: String,
      default: "Unknown",
    },
    postedBy: {
      type: String,
    },
    background: {
      type: String,
      default: "blue",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);
