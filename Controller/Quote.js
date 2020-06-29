const Quote = require("../Models/Quote");

exports.getQuoteById = (req, res, next, id) => {
  Quote.findById(id)
    .populate("category")
    .exec((err, quote) => {
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

exports.getQuotesFromCategory = (req, res) => {
  Quote.findOne({ category: req.category.categoryName }).exec((err, quotes) => {
    if (err || !quotes)
      return res.status(400).json({ error: "NO quotes found" });

    res.send(quotes);
  });
};

exports.getQuote = (req, res) => {
  res.send(req.quotify);
};

exports.createQuote = (req, res) => {
  const newQuote = new Quote(req.body);

  newQuote.save((err, quote) => {
    if (err || !quote) return res.status(400).json({ error: err });

    res.send(quote);
  });
};

exports.deleteQuote = (req, res) => {
  const quote = req.quotify;

  quote.remove((err, delQuote) => {
    if (err || !delQuote) return res.status(400).json({ error: err });

    res.json({
      msg: "Quote deleted sucessfully..",
      delQuote,
    });
  });
};

exports.updateQuote = (req, res) => {
  Quote.findByIdAndUpdate(
    { _id: req.quotify._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, updaeQuote) => {
      if (err) return res.status(400).json({ error: err });

      if (!updaeQuote)
        return res.status(400).json({ error: "NO quote found to update" });

      res.json({ msg: "Quote updated sucessfully..", quote: { updaeQuote } });
    }
  );
};
