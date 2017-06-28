var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var sess = req.session;
	if (sess.user) {
		res.render('index', {
			name: sess.user
		});
	} else {
		res.redirect('/user/login');
	}

});

module.exports = router;