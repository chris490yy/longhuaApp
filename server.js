var app = require('./server/config/express.config.js');

app.get('/', (req, res) => {
  res.sendfile('index.html')
})

var port = process.env.PORT || 8000;


app.listen(port, function(err){
  if(err) console.log(err, "server start error!!")
  else console.log("server starts at " + port);
});