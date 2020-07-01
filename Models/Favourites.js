const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const favSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  quote: {
    type: ObjectId,
    ref: "Quote",
  },
});

module.exports = mongoose.model("Favourite", favSchema);
