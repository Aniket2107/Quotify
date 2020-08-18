const { isAdmin, isAuthenticated, isSignedIn } = require("../Controller/auth");

const router = require("express").Router();

const { getUserbyId, getaUser, getAllUsers } = require("../Controller/User");

router.param("userId", getUserbyId);

router.get("/user/:userId", getaUser);
router.get("/users", isAuthenticated, isSignedIn, isAdmin, getAllUsers);

module.exports = router;
