const { isAdmin, isAuthenticated, isSignedIn } = require("../Controller/auth");

const router = require("express").Router();

const {
  getUserbyId,
  getUserToDel,
  getaUser,
  getAllUsers,
  updateUser,
  removeUser,
} = require("../Controller/User");

router.param("userId", getUserbyId);
router.param("delUserId", getUserToDel);

router.get("/user/:userId", getaUser);
router.get("/users/:userId", isSignedIn, isAuthenticated, isAdmin, getAllUsers);

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

router.delete(
  "/user/:userId/:delUserId",
  isSignedIn,
  isAuthenticated,
  removeUser
);

module.exports = router;
