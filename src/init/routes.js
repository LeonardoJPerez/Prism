'use strict';
var membersRoutes = require('./../routes/v1/members');
var locationRoutes = require('./../routes/v1/location');

module.exports = {
    handlers: [
        membersRoutes.routes,
        locationRoutes.routes
    ]
}