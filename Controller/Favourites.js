const Favourite = require("../Models/Favourites");

exports.getFavbyId = (req, res, next, id) => {
  Favourite.findById(id)
    .populate("quote")
    .exec((err, fav) => {
      if (err) return res.status(400).json({ error: err });

      req.favourite = fav;
      next();
    });
};

exports.getuserFavourites = (req, res) => {
  Favourite.find({ user: req.profile })
    .populate("quote", "quote category author postedBy")
    .exec((err, favQt) => {
      if (err) return res.status(400), json({ error: err });

      res.send(favQt);
    });
};

exports.createFavourite = (req, res) => {
  const newFav = new Favourite(req.body);

  newFav.save((err, savedfav) => {
    if (err) return res.status(400).json({ error: err });

    if (!savedfav)
      return res.status(400).json({ error: "Error saving fav in Db" });

    res.json({
      msg: "Favourite created sucessfully..",
      favourite: {
        savedfav,
      },
    });
  });
};

exports.updateFavourite = (req, res) => {
  Favourite.findByIdAndUpdate(
    { _id: req.favourite._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, updatedFav) => {
      if (err || !updatedFav) return res.status(400).json({ error: err });

      res.json({
        msg: "Favourite updated sucessfully..",
        Favourite: {
          updatedFav,
        },
      });
    }
  );
};

exports.removeFavourite = (req, res) => {
  const delFav = req.favourite;

  delFav.remove((err, delFv) => {
    if (err) return res.status(400).json({ error: err });

    if (!delFv) return res.status(400).json({ error: "error deleting fav" });

    res.json({
      msg: "Favourite deleted sucessfully..",
      delFavourite: {
        delFv,
      },
    });
  });
};
