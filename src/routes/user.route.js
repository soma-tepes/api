const express = require('express');
const userController = require('./../controllers/user.controller')
const router = express.Router();
const userMiddleware = require('./../middlewares/user.middleware');
//buscar todos, findAllUsers
const validationMiddleware = require('../middlewares/validator.middlewares')
router.get("/",userController.findAllUsers)

router
  .use('/:id', userMiddleware.validUser)
  .route('/:id')
  .get(userController.findOneUser)
  .patch(validationMiddleware.updateUserValidation,userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;

