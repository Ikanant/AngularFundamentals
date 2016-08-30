var express = require('express');
var path = require ('path');

var app = express();
var rootpath = path.normalize(__dirname + '/../');

app.use(express.static(rootpath + '/app'));

app.listen(8000, function(req, resp){
    console.log("Listening in port 8000");
});
