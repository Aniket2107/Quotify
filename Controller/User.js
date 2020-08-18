const User = require("../Models/User");

exports.getUserbyId = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err) return res.status(400).json({ error: "Error connecting DB" });

    if (!user)
      return res.status(400).json({ error: "No user found by such id" });

    req.profile = user;
    next();
  });
};

exports.getUserToDel = (req, res, next, delid) => {
  User.findById(delid).exec((err, duser) => {
    if (err) return res.status(400).json({ error: "Error connecting DB" });

    if (!duser)
      return res.status(400).json({ error: "No user found by such id" });

    req.delProfile = duser;
    next();
  });
};

exports.getaUser = (req, res) => {
  //For frontend some values and not necesary
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.createdAt = undefined;
  req.profile.updatedAt = undefined;

  return res.json(req.profile);
};

exports.getAllUsers = (req, res) => {
  User.find().exec((err, users) => {
    if (err) return res.status(400).json({ error: err });

    if (!users) return res.status(400).json({ error: `No users found` });

    return res.send(users);
  });
};

exports.updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, updatedUser) => {
      if (err) return res.status(400).json({ error: err });

      if (!updatedUser)
        return res.status(400).json({ error: "No category found to update" });

      res.json({
        msg: "Category updated sucessfully..",
        category: {
          updatedUser,
        },
      });
    }
  );
};

exports.removeUser = (req, res) => {
  const delUser = req.delProfile;

  delUser.remove((err, deletedUser) => {
    if (err) return res.status(400).json({ error: err });

    if (!deletedUser)
      return res.status(400).json({ error: "NO user found to be deleted" });

    res.json({
      msg: "Category deleted sucessfully...",
      category: {
        deletedUser,
      },
    });
  });
};
