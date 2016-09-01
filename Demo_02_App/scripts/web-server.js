var express = require('express');
var path = require ('path');
var events = require('./eventsController');

var app = express();
var rootpath = path.normalize(__dirname + '/../');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(rootpath + '/app'));

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);
app.get('/data/event', events.getAll);

app.listen(8000, function(req, resp){
    console.log("Listening in port 8000");
});
