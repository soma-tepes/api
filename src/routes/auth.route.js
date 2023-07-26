const express = require('express');

const authController = require("./../controllers/auth.controller")

const router = express.Router();



router.post('/signup',authController.signUP)

router.post('/signin',authController.signIn)

module.exports = router;
