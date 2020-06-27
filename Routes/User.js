const { isAdmin, isAuthenticated, isSignedIn } = require("../Controller/auth");

const router = require("express").Router();

const { getUserbyId, getaUser } = require("../Controller/User");

router.param("userId", getUserById);

router.get("/user/:userId", getaUser);

module.exports = router;
