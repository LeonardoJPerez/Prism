'use strict';

const locationService = require('./../../../services/location');
const membersService = require('./../../../services/members');

module.exports = {
    routes: [{
            method: 'GET',
            path: '/members/{zipcode}',
            handler: function (request, reply) {
                locationService.getLocationCoordinates(request.params.zipcode)
                    .then((res) => {
                        membersService.getMembersByLocation(res)
                            .then((result) => {
                                reply(JSON.stringify(result, null, 4));
                            }, (error) => {
                                reply(JSON.stringify(error, null, 4));
                            });
                    });
            }
        },
        {
            method: 'GET',
            path: '/member/{bid}',
            handler: function (request, reply) {
                membersService.getMembersByBioguideId(request.params.bid)
                    .then((res) => {
                        reply(JSON.stringify(res, null, 4));
                    }, (error) => {
                        reply(JSON.stringify(error, null, 4));
                    });
            }
        },
        {
            method: 'GET',
            path: '/member/search',
            handler: function (request, reply) {
                membersService.searchMembersByString(request.query.query)
                    .then((res) => {
                        reply(JSON.stringify(res, null, 4));
                    }, (error) => {
                        reply(JSON.stringify(error, null, 4));
                    });
            }
        }
    ]
}