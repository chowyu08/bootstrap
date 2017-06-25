var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
   res.render('login');
});
router.get('/register', function(req, res) {
   
});

module.exports = router;
