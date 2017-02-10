'use strict';

const billsService = require('./../../../../services/bills');

module.exports = {
    getBills: {
        validate: {},
        pre: [],
        handler: (request, reply) => {
            billsService.getBills()
                .then((res) => {
                    reply(JSON.stringify(res.results, null, 4));
                }, (error) => {
                    reply(JSON.stringify(error, null, 4));
                });
        }
    }
}