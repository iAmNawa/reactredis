var redis = require("redis"),
    client = redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

client.on('connect', function() {
  console.log('connected');
});

client.set('framework', 'PeeActJS', function(err, reply) {
  console.log(reply);
});

client.get('framework', function(err, reply) {
    console.log(reply);
});
