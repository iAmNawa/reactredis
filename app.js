var port = 34564;
var app = require('express')();

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));

require('http').createServer(app).listen(port,function(){
  console.log('server is running, on port', port)
});
