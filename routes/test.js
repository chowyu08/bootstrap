var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('test', {
		name: "dashboard"
	});
});
router.get('/charts', function(req, res, next) {
	res.render('test', {
		name: "charts"
	});
});
router.get('/tables', function(req, res, next) {
	res.render('test', {
		name: "table"
	});
});
router.get('/forms', function(req, res, next) {
	res.render('test', {
		name: "forms"
	});
});
router.get('/elements', function(req, res, next) {
	res.render('test', {
		name: "elements"
	});
});
router.get('/grid', function(req, res, next) {
	res.render('test', {
		name: "grid"
	});
});
router.get('/blank', function(req, res, next) {
	res.render('test', {
		name: "blank"
	});
});
module.exports = router;