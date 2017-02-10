'use strict';

const billsService = require('./../../../../services/bills');

module.exports = {
    getBills: {
        validate: {},
        pre: [],
        handler: (request, reply) => {
            billsService.getBills();
        }
    }
}