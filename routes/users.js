var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
   res.render('register');
});

router.post('/register', function(req,res) {
	// res.send(req.body);
	// res.json({data:req.body});
	res.render('index', { title: 'Express',name:'joy' });
})

module.exports = router;
