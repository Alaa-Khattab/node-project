var fs = require('fs');
  var fileContents = fs.readFileSync(__dirname + '/../view/style.css', { encoding: 'utf8' });
module.exports = function(req, res) {
    res.writeHead(200, {
        'Content-type': 'text/css'
    });
    res.write(fileContents);
    res.end();
};
