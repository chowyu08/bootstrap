var express = require('express');
var router = express.Router();
var userModel = require('../models/user.js')

/* GET users listing. */
router.get('/', function(req, res) {
	res.render('register');
});

router.post('/register', function(req, res) {
	// console.log('username: ' + req.body.username)
	// userModel.save()
	var user = new userModel(req.body);
	user.save(function(error) {
		if (error) {
			console.log(error);
		} else {
			console.log('saved OK!');
		}
	});
	res.send(req.body);
	// res.json({data:req.body});
	// res.render('index', { title: 'Express',name:'joy' });
})

module.exports = router;