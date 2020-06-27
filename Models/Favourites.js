const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const favSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  category: {
    type: ObjectId,
    ref: "Category",
  },
});

module.exports = mongoose.model("Favourite", favSchema);
