const Toheeb = require("../models/userModel");

exports.getOverview = async (req, res) => {
  const user = await Toheeb.findOne({ slug: req.params.slug })
 
  res.status(200).render("home", {
    user
  });
};