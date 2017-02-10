'use strict';

module.exports = {
    get: {
        validate: {},
        pre: [],
        handler: (request, reply) => {
            reply('Fetching bills');
        }
    }
}