var mongoose = require("mongoose");

//CONNECT TO MONGODB set the schema
mongoose.connect('mongodb://longhua:longhua123@ds111479.mlab.com:11479/heroku_gsnmlvb0');
//mongoose.connect('mongodb://localhost/Longhua');


module.exports = mongoose