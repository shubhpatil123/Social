const express=require('express');

const router = express.Router();
const homeController = require('../controllers/home_controllers');

console.log('Router Loaded');

router.get('/',homeController.home);

module.exports=router;