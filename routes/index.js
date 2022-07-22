var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET dashboard page. */
router.get('/dashboard', function (req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
});

/* GET About Us page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});


/* GET Contact Us page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/submitForm', function (req, res, next) {
  res.render('index', { title: 'Home' });
});


module.exports = router;
