const router = require("express").Router();
const { isSignedIn, isAuthenticated, isAdmin } = require("../Controller/auth");
const { getUserbyId } = require("../Controller/User");
const {
  getCategoryById,
  getAllCategories,
  createCategory,
  updateCaategory,
  removeCategory,
} = require("../Controller/Category");
const Category = require("../Models/Category");

router.param("categoryId", getCategoryById);
router.param("userId", getUserbyId);

router.get("/categories", getAllCategories);

router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);
router.put(
  "/category/update/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCaategory
);
router.delete(
  "/category/delete/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeCategory
);

module.exports = router;
