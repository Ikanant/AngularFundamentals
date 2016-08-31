var fs = require('fs'); // Node file system object to read and write to disk

module.exports.get = function(req, res) {
  var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
  res.setHeader('Content-Type', 'application/json');
  res.send(event);
};

module.exports.save = function(req, res) {
  var files = fs.readdirSync('app/data/event/');
  var fileName = files.length + 1;

  var event = req.body;
  fs.writeFileSync('app/data/event/' + fileName + '.json', JSON.stringify(event));
  res.send(event);
};
