var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title1: 'Vamos', title2: 'Las Palmas'});
});

module.exports = router;
