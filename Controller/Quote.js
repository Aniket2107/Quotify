const Quote = require("../Models/Quote");

exports.getQuoteById = (req, res, next, id) => {
  Quote.findById(id).exec((err, quote) => {
    if (err) return res.status(400).json({ err: err });

    if (!quote) return res.status(400).json({ error: "No quote found" });

    req.quotify = quote;
    next();
  });
};

exports.getAllQuotes = (req, res) => {
  Quote.find().exec((err, quotes) => {
    if (err || !quotes)
      return res.status(400).json({ error: "No quotes found" });

    res.send(quotes);
  });
};

//CRUD operations are remaining..
