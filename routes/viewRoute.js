const express = require("express");
const viewController = require("../controllers/viewController");

const router = express.Router();

router
  .get("/:slug", viewController.getOverview);
  
module.exports = router;