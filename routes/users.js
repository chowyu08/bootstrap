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
	userModel.findOne(conditions, function(err, result) {
		if (err) {
			console.log("find user by username error: " + error);
			// res.send("find user by username error: " + error);
			res.json({
				id: -1,
				status: 'failed',
				detail: err
			});
		} else if (!result) {
			console.log(result);
			// res.send("username not exist!");
			res.json({
				id: -1,
				status: "failed",
				detail: "username not exist"
			});
		} else {
			if (req.body.password != result.password) {
				// res.send("password error");
				res.json({
					id: -1,
					status: "failed",
					detail: "user password error"
				});
			} else {
				req.session.user = result.username;
				req.session.id = result._id;
				res.json({
					id: result._id,
					status: "success",
					detail: ""
				});
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
	// console.log("nad" + req.body.username)
	userModel.findOne(conditions, function(err, result) {
		if (err) {
			console.log("find user by username error: " + err);
			// res.send("find user by username error: " + error);
			res.json({
				id: -1,
				status: 'failed',
				detail: err
			});
		} else if (result) {
			console.log("user: " + result);
			res.json({
				id: -1,
				status: "failed",
				detail: "username exist"
			});
		} else {
			var user = new userModel(req.body);
			user.save(function(error, data) {
				if (error) {
					console.log("insert user error: " + err);
					res.json({
						id: -1,
						status: "failed",
						detail: err
					});
				} else {
					console.log('insert user success!');
					// console.log("result:" + res)
					res.json({
						id: data._id,
						status: "success",
						detail: ""
					});
				}
			});
		}
	});
})

module.exports = router;