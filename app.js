var port = 34564;
var cors = require('cors');
var app = require('express')();
var qs = require('qs');
var query = require('query-string');
//var routes = require("./routes/routes.js");

app.use(cors());

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));

app.get("/", function(req, res) {
  res.status(200).send("Welcome to our restful API");
});

app.post("/user", function (req, res) {
 console.log(req.body)
});

app.post("/", function (req, res) {
  var almostReady = req.url.substr(2);
  var parseItUp = qs.parse(almostReady);
  console.log(parseItUp)
});

app.get("/user", function (req, res) {
  console.log('something happened')
})

require('http').createServer(app).listen(port,function(){
  console.log('server is running, on port', port)
});
