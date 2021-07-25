const express = require('express');
const router = express.Router();
const homeController = require('../controller/home');
console.log("router loaded");

router.get('/',homeController.home);
router.post('/create-task',homeController.createTask);

module.exports = router;