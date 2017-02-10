'use strict';
const locationService = require('./../../../../services/location');
const districtsService = require('./../../../../services/districts');

module.exports = {
    getDistrictsByLocation: {
        validate: {},
        pre: [],
        handler: (request, reply) => {
            locationService.getLocationCoordinates(request.params.zipcode)
                .then((res) => {
                    districtsService.getDistrictsByCoordinates(res.geometry.location)
                        .then((res) => {
                            reply(JSON.stringify(res.results, null, 4));
                        }, (error) => {
                            reply(JSON.stringify(error, null, 4));
                        });
                });

        }
    }
}