const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUser)
  .post(userController.uploadUserPhoto, userController.createUser);
  
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .post(userController.uploadMultipleImages, userController.addPortfolio)
  .delete(userController.deleteUser);
  

router
  .route("/:id/:nested")
  .delete(userController.removePortfolio);

module.exports = router;