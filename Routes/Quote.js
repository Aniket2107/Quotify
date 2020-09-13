const router = require("express").Router();
const { isSignedIn, isAuthenticated } = require("../Controller/auth");
const { getCategoryById } = require("../Controller/Category");
const { getUserbyId } = require("../Controller/User");
const {
  getQuoteById,
  getAllQuotes,
  getQuotesFromCategory,
  getQuote,
  createQuote,
  updateQuote,
  deleteQuote,
} = require("../Controller/Quote");

router.param("userId", getUserbyId);
router.param("quoteId", getQuoteById);
router.param("categoryId", getCategoryById);

router.get("/quotes", getAllQuotes);
router.get("/quote/:quoteId", getQuote);
router.get("/quotes/category/:categoryId", getQuotesFromCategory);
router.post("/quote/create/:userId", isSignedIn, isAuthenticated, createQuote);
router.put(
  "/quote/update/:quoteId/:userId",
  isSignedIn,
  isAuthenticated,
  updateQuote
);
router.delete(
  "/quote/delete/:quoteId/:userId",
  isSignedIn,
  isAuthenticated,
  deleteQuote
);

module.exports = router;
