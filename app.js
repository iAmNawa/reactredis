var port = 34564;
var cors = require('cors');
var app = require('express')();
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

require('http').createServer(app).listen(port,function(){
  console.log('server is running, on port', port)
});
