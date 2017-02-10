'use strict';

const Hoek = require('hoek');

exports.register = function (server, options, next) {
    options = Hoek.applyToDefaults({ basePath: '' }, options);

    server.route([
        {
            method: 'GET',
            path: options.basePath + '/bills',
            config: require('./config/read').getBills
        },
        {
            method: 'GET',
            path: options.basePath + '/bills/active',
            config: require('./config/read').getActiveBills
        }
    ]);

    next();
};

exports.register.attributes = {
    name: 'bills',
    version: '1.0.0'
};