
module.exports = {
    'GET /': require('./app/form.js'),
    'GET /style.css': require('./app/style.js'),
    'GET /requestjs.js' : require('./app/requestjs.js'),
    'POST /findword' : require('./app/code.js')
};
