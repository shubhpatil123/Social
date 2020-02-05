const express = require('express');
const router = express.Router();

const usersController = require('../controllers/user_postcontroller');

router.get('/post',usersController.post);


module.exports = router;