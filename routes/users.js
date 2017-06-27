var express = require('express');
var router = express.Router();
var userModel = require('../models/user.js')

/* GET users listing. */
router.get('/', function(req, res) {
	res.render('login');
});
router.get('/register', function(req, res) {
	res.render('register');
});

router.post('/login', function(req, res) {
	req.body['logindate'] = new Date();
	var conditions = {
		username: req.body.username
	};
	userModel.find(conditions, function(err, result) {
		if (err) {
			console.log("find user by username error: " + error);
			res.send("find user by username error: " + error);
		} else if (result.length < 1) {
			console.log(result);
			res.send("username not exist!");
		} else {
			if (req.body.password != result.password) {
				res.send("password error");
			} else {
				res.send("login success");
			}
		}
	});
})

router.post('/register', function(req, res) {
	req.body['logindate'] = new Date();
	req.body['regdate'] = new Date();
	var conditions = {
		username: req.body.username
	};
	userModel.find(conditions, function(err, result) {
		if (err) {
			console.log("find user by username error: " + error);
			res.send("find user by username error: " + error);
		} else if (result.length > 0) {
			console.log("username: " + result);
			res.send("username exist!");
		} else {
			var user = new userModel(req.body);
			user.save(function(error) {
				if (error) {
					console.log("insert user error: " + error);
					res.send("insert user error: " + error);
				} else {
					console.log('saved OK!');
					res.send("register success!")
				}
			});
		}
	});
})

module.exports = router;