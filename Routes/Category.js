const router = require("express").Router();
const { isSignedIn, isAuthenticated } = require("../Controller/auth");
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
  createCategory
);
router.put(
  "/category/update/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  updateCaategory
);
router.delete(
  "/category/delete/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  removeCategory
);

module.exports = router;
