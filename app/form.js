var fs = require('fs');
var form = fs.readFileSync(__dirname + '/../front-end/form.html', 'utf8');
module.exports = function(req, res) {
    res.end(form);
};
