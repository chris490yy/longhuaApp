var mongoose = require("mongoose");

//CONNECT TO MONGODB set the schema
mongoose.connect('mongodb://localhost/Longhua');

module.exports = mongoose