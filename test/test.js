var shot = require('shot');
var test = require('tape');
var mainHandler = require('../index.js');
var utils = require('../utils.js');

test('GET /: should return form.html', function(t) {
    shot.inject(mainHandler, { method: 'GET', url: '/' }, function(res) {
        var indexOf = res.payload.indexOf('input');
        t.notEqual(indexOf, -1, 'got input somewhere in the html');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});
test('GET /style.css: should return style.css file', function(t) {
    shot.inject(mainHandler, { method: 'GET', url: '/style.css' }, function(res) {
        var indexOf = res.payload.indexOf('color');
        t.notEqual(indexOf, -1, 'got color somewhere in the style.css file');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});
test('GET /requestjs.js: should return request.js file', function(t) {
    shot.inject(mainHandler, { method: 'GET', url: '/requestjs.js' }, function(res) {
        var indexOf = res.payload.indexOf('XMLHttpRequest');
        t.notEqual(indexOf, -1, 'got XMLHttpRequest somewhere in the request.js file');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});
test('POST /findword: should return an array of specific words as a response of the search', function(t) {
    shot.inject(mainHandler, { method: 'POST', url: '/findword' }, function(res) {
         var result = JSON.parse(res.payload);
        t.equal(Object.prototype.toString.call(result), '[object Array]', 'got an array as a response');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});
