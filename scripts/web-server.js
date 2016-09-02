var express = require('express');
var path = require ('path');
var events = require('./eventsController');

var app = express();

var port = Number(process.env.PORT || 8000);

var rootpath = path.normalize(__dirname + '/../');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(rootpath + '/app'));

app.get('/data/event/:id', events.get);
app.post('/data/event/', events.save);
app.get('/data/event', events.getAll);
app.get('*', function(req, res) { res.sendFile(rootpath + '/app/index.html'); });

app.listen(port, function(){
    console.log('Listening to port: ' + port);
});
