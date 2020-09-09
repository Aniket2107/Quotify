const User = require("../Models/User");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const ExpressJwt = require("express-jwt");
require("dotenv").config();

exports.signUp = async (req, res) => {
  //Validation
  const errors = validationResult(req);
  // console.log(errors);
  if (!errors.isEmpty())
    return res
      .status(400)
      .json({ error: errors.array()[0].msg, prms: errors.array()[0].param });

  const usernameExists = await User.findOne({ username: req.body.username });
  if (usernameExists)
    return res.status(400).json({ error: "Username already exists" });

  const newUser = new User(req.body);

  newUser.save((err, user) => {
    if (err) return res.status(400).json({ error: "Error saving user in Db" });

    res.send({
      username: user.username,
      email: user.email,
      id: user._id,
    });
  });
};

exports.signIn = (req, res) => {
  //Validation
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res
      .status(400)
      .json({ error: errors.array()[0].msg, prms: errors.array()[0].param });

  const { username, password } = req.body;

  User.findOne({ username }, (err, user) => {
    if (err) return res.status(400).json({ error: err });

    if (!user) return res.status(400).json({ error: "User not fouond" });

    if (!user.authenticate(password))
      return res
        .status(400)
        .json({ error: "Enter valid username and password" });

    //Create token and save in cookies
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);

    res.cookie("token", token, { expire: new Date() + 1 });

    //Send response to frontend
    const { _id, username, email, role } = user;
    return res.json({ token, user: { _id, username, email, role } });
  });
};

exports.signOut = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Signout sucessfully..",
  });
};

exports.isSignedIn = ExpressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",
});

//Custom midleware
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;

  if (!checker) return res.status(403).json({ error: "Access Denied" });
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0)
    return res.status(403).json({ error: "you are not admin" });
  next();
};
