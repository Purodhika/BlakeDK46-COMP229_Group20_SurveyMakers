let mongoose = require('mongoose');

// create a model class
let Surveys = mongoose.Schema({
    Title: String,
    Description: String,
},
{
  collection: "surveys"
});

module.exports = mongoose.model('Surveys', Surveys);