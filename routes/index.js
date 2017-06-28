var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
	var sess = req.session;
	if (sess.user) {
		res.render('index', {
			title: 'Express',
			name: 'namew'
		});
	} else {
		res.redirect('/user');
	}

});

module.exports = router;