var port = 34564;
var cors = require('cors');
var app = require('express')();
var qs = require('qs');
//var query = require('query-string');
//var routes = require("./routes/routes.js");

var redis = require('redis');
    db = redis.createClient();

app.use(cors());

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));

app.get("/", function(req, res) {
  res.status(200).send("Welcome to our restful API");
});

app.post("/user", function (req, res) {
 //console.log(req.body)
 var key = Date.now();
 //console.log(key)
 db.set(key, req.body.name, redis.print);
 //client.hmset([key, req.body.name, req.body.age], function (err, res) {});
});

// The path will be params.name
app.get('/user/:name', (req,res)=>{
  //console.log(req.params)
  res.send(req.params.name)
})

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
})

//Map the keys
//db.keys('*', (_, keys) => keys.map(key => db.get(key, (_, val) =>
//  console.log(`key: ${key}, val: ${val}`))))

//Set multiple values
//db.hmset(`hashes::${Date.now()}`,
//  'name', 'paul',
//  'age', 30)

//Get all the key value pairs
//db.keys('hashes::*', (_, hashes)=>{
//  hashes.map( hash => {
//    db.hgetall(hash, (_, val)=> {
//      console.log(val)
//    })
//  })
//})
