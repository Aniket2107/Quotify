const mongoose = require("mongoose");
const uuidv1 = require("uuid/v1");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      min: 4,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    encry_password: {
      type: String,
      required: true,
      min: 6,
    },
    salt: String,

    //differentiates admin and users.
    role: {
      type: Number,
      default: 0,
    },
    isAdult: {
      type: Boolean,
      default: false,
      required: true,
    },
    interests: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (password) {
    return this.securePassword(password) === this.encry_password;
  },

  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
