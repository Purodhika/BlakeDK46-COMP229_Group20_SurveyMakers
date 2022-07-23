var express = require('express');
var router = express.Router();
let surveyModel = require('../models/surveys');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET dashboard page. */
//Added by Lyudmila Zhurba 

router.get('/dashboard', function (req, res, next) {

  surveyModel.find({}, null, (err, all) => {
    if(err)
    {
        return console.error(err);
    }
    else
    {
        res.render('dashboard', { title: 'Dashboard', list: all });
      }
    });
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
