const router = require('express').Router();
const { HomeController } = require('../controllers');
    
router.get('/index', HomeController.index);

module.exports = router;
