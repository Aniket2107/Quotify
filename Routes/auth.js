const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { signUp, signIn, signOut } = require("../Controller/auth");

router.post(
  "/signup",
  [
    check("username", "Username must have atleast 4chars.").isLength({
      min: 4,
    }),
    check("email", "Enter valid email address").isEmail(),
    check("password", "Password must be atleast 6 chars long").isLength({
      min: 6,
    }),
  ],
  signUp
);

router.post(
  "/signin",
  [
    check("username", "Enter valid username & password").isLength({ min: 4 }),
    check("password", "Enter valid password & password").isLength({ min: 6 }),
  ],
  signIn
);

router.get("/signout", signOut);

module.exports = router;
