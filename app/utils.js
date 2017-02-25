var qs = require('querystring');
var final = require('./textfile.js')
var result, shortresult, lowercaseInput, lowercaseElm, input;

function parseBody(req, callback) {
    var body = '';
    req.on('data', function(data) {
        body += data;
    });
    req.on('end', function() {
        callback(undefined, qs.parse(body));
    });
}

function processing(body, callback) {

    input = Object.keys(body)[0];
    result = final.filter(function(elm) {
        if (typeof(input) !== "undefined") {
            lowercaseInput = input.toLowerCase();
        }
        lowercaseElm = elm.toLowerCase();
        return lowercaseElm >= lowercaseInput;
    });
    shortresult = result.slice(0, 6);
    callback(undefined, JSON.stringify(shortresult));

}
module.exports = {
    parseBody: parseBody,
    processing: processing

}
  