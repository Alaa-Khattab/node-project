var utils = require('../app/utils.js');
module.exports = function(req, res) {
    utils.parseBody(req, function(error, body) {
        utils.processing(body, function(err, result) {
            res.end(result);
        });


    });
}

