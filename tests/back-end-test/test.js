var shot = require('shot');
var test = require('tape');
var mainepage = require('../../app/form.js');
var mainstyle = require('../../app/style.js');
var mainrequest = require('../../app/requestjs.js');
var mainHandler = require('../../app/response.js');
test('GET /: should return form.html', function(t) {
    shot.inject(mainepage, { method: 'GET', url: '/' }, function(res) {
        var indexOf = res.payload.indexOf('input');
        t.notEqual(indexOf, -1, 'got input somewhere in the html');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});
test('GET /style.css: should return style.css file', function(t) {
    shot.inject(mainstyle, { method: 'GET', url: '/style.css' }, function(res) {
        var indexOf = res.payload.indexOf('color');
        t.notEqual(indexOf, -1, 'got color somewhere in the style.css file');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});
test('GET /requestjs.js: should return request.js file', function(t) {
    shot.inject(mainrequest, { method: 'GET', url: '/requestjs.js' }, function(res) {
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
test('POST /findword: with e.g. input = "b"  should return [ B, b, ba, baa, baahling, Baal ]', function(t) {
    shot.inject(mainHandler, { method: 'POST', url: '/findword', payload: "b" }, function(res) {
        var result = JSON.parse(res.payload);
        t.deepEqual(result, ['B', 'b', 'ba', 'baa', 'baahling', 'Baal'], 'got an empty array as a response');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});
test('POST /findword: with input as a number should return an empty array ', function(t) {
    shot.inject(mainHandler, { method: 'POST', url: '/findword', payload: "2" }, function(res) {
        var result = JSON.parse(res.payload);
        t.deepEqual(result, [], 'got an empty array as a response');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});

test('POST /findword: with input as a special character should return an empty array ', function(t) {
    shot.inject(mainHandler, { method: 'POST', url: '/findword', payload: "@" }, function(res) {
        var result = JSON.parse(res.payload);
        t.deepEqual(result, [], 'got an empty array as a response');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});
test('POST /findword: with empty input should return an empty array ', function(t) {
    shot.inject(mainHandler, { method: 'POST', url: '/findword', payload: " " }, function(res) {
        var result = JSON.parse(res.payload);
        t.deepEqual(result, [], 'got an empty array as a response');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});

test('POST /findword: with input did not include in words.txt file should return an empty array ', function(t) {
    shot.inject(mainHandler, { method: 'POST', url: '/findword', payload: "apple watch " }, function(res) {
        var result = JSON.parse(res.payload);
        t.deepEqual(result, [], 'got an empty array as a response');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});
