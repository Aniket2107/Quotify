const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { signUp, signIn, signOut } = require("../Controller/auth");

router.post(
  "/signup",
  [
    check("username",'Username must have atleast 4chars').isLength({ min: 4 }),
    check("email",'Invalid email address').isEmail(),
    check("password",'Password must contain atleast 6chars').isLength({ min: 6 }),
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
