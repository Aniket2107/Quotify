const router = require("express").Router();
const { getUserbyId } = require("../Controller/User");
const { isSignedIn, isAuthenticated } = require("../Controller/auth");
const {
  getFavbyId,
  getuserFavourites,
  createFavourite,
  updateFavourite,
  removeFavourite,
} = require("../Controller/Favourites");

router.param("userId", getUserbyId);
router.param("favId", getFavbyId);

router.get(
  "/favourites/:userId",
  isSignedIn,
  isAuthenticated,
  getuserFavourites
);

router.post(
  "/favourite/create/:userId",
  isSignedIn,
  isAuthenticated,
  createFavourite
);

router.put(
  "/favourite/update/:favId/:userId",
  isSignedIn,
  isAuthenticated,
  updateFavourite
);

router.delete(
  "/favourite/remove/:favId/:userId",
  isSignedIn,
  isAuthenticated,
  removeFavourite
);

module.exports = router;
