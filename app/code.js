var final = require('./textfile.js')
console.log(final);
var utils = require('../utils.js');
var result, shortresult,lowercaseInput,lowercaseElm;

module.exports = function(req, res) {
    utils.parseBody(req, function(err, body) {
        var input = Object.keys(body)[0];        
        result = final.filter(function(elm) {
            if(typeof (input) !== "undefined"){
                lowercaseInput = input.toLowerCase();
            }
        	lowercaseElm = elm.toLowerCase();
           return lowercaseElm >= lowercaseInput;
        })
        shortresult = result.slice(0, 6);
        res.end(JSON.stringify(shortresult));
    });
}
