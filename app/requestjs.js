var fs = require('fs');
  var fileContents = fs.readFileSync(__dirname + '/../front-end/request.js', { encoding: 'utf8' });
module.exports = function(req, res) {
    res.writeHead(200, {
        'Content-type': 'application/javascript'
    });
    res.write(fileContents);
    res.end();
};
