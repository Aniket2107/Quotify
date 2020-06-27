const { isSignedIn, isAuthenticated } = require("../Controller/auth");

const router = require("express").Router();
const { isSignedIn, isAuthenticated } = require("../Controller/auth");
const { getUserbyId } = require("../Controller/User");
const {
  getQuoteById,
  getAllQuotes,
  getQuote,
  createQuote,
  updateQuote,
  deleteQuote,
} = require("../Controller/Quote");

router.param("userId", getUserById);
router.param("quoteId", getQuoteById);

router.get("/quotes", getAllQuotes);
router.get("/quote/:quoteId", getQuote);
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
