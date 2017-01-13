var app = require('./server/config/express.config.js');

app.get('/', (req, res) => {
  res.sendfile('index.html')
})

app.listen(8000, function(err){
  if(err) console.log(err, "!!!!!!!!!!!!!")
  else console.log("server starts at 8000");
});