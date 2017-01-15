var mongoose = require("mongoose");

//CONNECT TO MONGODB set the schema
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/Longhua');


module.exports = mongoose