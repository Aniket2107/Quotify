const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
      required: true,
    },
    //Todo
    category: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
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
      default: "#4d4d4e",
    },
    color: {
      type: String,
      default: "white",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);
