var fs = require('fs');
var text = fs.readFileSync(__dirname + '/../words.txt', 'utf8');
var utils = require('../utils.js');
var result, shortresult;
module.exports = function(req, res) {
    utils.parseBody(req, function(err, body) {
        var input = Object.keys(body)[0];
        var final = text.split('\n');
        result = final.filter(function(elm) {
            return elm.indexOf(input) > -1;
        })
        shortresult = result.slice(0, 6);
        res.end(JSON.stringify(shortresult));
    });
}
