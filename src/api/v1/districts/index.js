'use strict';

const Hoek = require('hoek');

exports.register = function (server, options, next) {
    options = Hoek.applyToDefaults({ basePath: '' }, options);

    server.route([
        {
            method: 'GET',
            path: options.basePath + '/districts/{zipcode}',
            config: require('./config/read').getDistrictsByLocation
        }
    ]);

    next();
};

exports.register.attributes = {
    name: 'districts',
    version: '1.0.0'
};