var dust = require('dust')();
var serand = require('serand');
var utils = require('utils');
var Advertisement = require('advertisements-service');
var list = require('advertisements-find');

module.exports = function (sandbox, options, done) {
    Advertisement.find({
        query: options,
        images: '288x162'
    }, function (err, advertisements) {
        if (err) {
            return done(err);
        }
        list(sandbox, {
            advertisements: advertisements,
            size: 4
        }, done);
    });
};
