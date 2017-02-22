var fs = require('fs');
var form = fs.readFileSync(__dirname + '/../view/form.html', 'utf8');
module.exports = function(req, res) {
    res.end(form);
};
