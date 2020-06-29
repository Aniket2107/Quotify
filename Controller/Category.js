const Category = require("../Models/Category");

exports.getCategoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, catgory) => {
    if (err) return res.status(400).json({ err: err });

    if (!catgory)
      return res.status(400).json({ error: "Error finding category" });

    req.category = catgory;
    next();
  });
};

exports.getAllCategories = (req, res) => {
  Category.find().exec((err, cat) => {
    if (err) return res.status(400).json({ err: err });

    if (!cat) return res.status(400).json({ error: "Error finding category" });

    res.send(cat);
  });
};

exports.createCategory = (req, res) => {
  const newCategory = new Category(req.body);

  newCategory.save((err, cat) => {
    if (err) return res.status(400).json({ err: err });

    if (!cat) return res.status(400).json({ error: "Error finding category" });

    res.json({ msg: "Category created sucessfully..", category: { cat } });
  });
};

exports.updateCaategory = (req, res) => {
  Category.findOneAndUpdate(
    { _id: req.category._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, updateCat) => {
      if (err) return res.status(400).json({ error: err });

      if (!updateCat)
        return res.status(400).json({ error: "No category found to update" });

      res.json({
        msg: "Category updated sucessfully..",
        category: {
          updateCat,
        },
      });
    }
  );
};

exports.removeCategory = (req, res) => {
  const delCat = req.category;

  delCat.remove((err, deletedCat) => {
    if (err) return res.status(400).json({ error: err });

    if (!deletedCat)
      return res.status(400).json({ error: "NO category found to be deleted" });

    res.json({
      msg: "Category deleted sucessfully...",
      category: {
        deletedCat,
      },
    });
  });
};
