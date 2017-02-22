var shot = require('shot');
var test = require('tape');
var mainHandler = require('../index.js');
var utils = require('../utils.js');

test('GET /: should return form.html', function(t) {
    shot.inject(mainHandler, { method: 'GET', url: '/' }, function(res) {
        var indexOf = res.payload.indexOf('in');
        t.notEqual(indexOf, -1, 'got input somewhere in the html');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});
