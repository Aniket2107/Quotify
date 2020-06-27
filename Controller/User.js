exports.getUserbyId = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err) return res.status(400).json({ error: "Error connecting DB" });

    if (!user)
      return res.status(400).json({ error: "No user found by such id" });

    req.profile = user;
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
