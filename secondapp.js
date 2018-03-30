const port = 45914;
const cors = require('cors');
const app = require('express');
const redis = require('redis');

require('http').createServer(app).listen(port,function(){
  console.log('server is running, on port', port)
})
