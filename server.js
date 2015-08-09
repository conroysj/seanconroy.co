var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/build'));

app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, './', 'index.html'));
});

app.listen(port);
console.log("Server listening on port " + port);
