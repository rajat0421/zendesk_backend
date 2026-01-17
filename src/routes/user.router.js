const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get("/getUsers",userController.getUsers);


module.exports = router;