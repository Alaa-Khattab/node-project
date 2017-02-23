var fs = require('fs');
var text = fs.readFileSync(__dirname + '/../words.txt', 'utf8');
var final = text.split('\n');
module.exports = final;

