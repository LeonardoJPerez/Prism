'use strict';

var unirest = require('unirest');

module.exports = {
    getLegislatorsByLocation: (location) => {
        return new Promise((fulfill, reject) => {
            var apiUrl = `https://congress.api.sunlightfoundation.com/legislators/locate?latitude=${location.lat}&longitude=${location.long}`;
            var Request = unirest.get(apiUrl);
            Request
                .header('Accept', 'application/json')
                .end((response) => {
                    if (response.status === 200) {
                        fulfill(response.body.results);
                    } else {
                        reject(response.error);
                    }
                });
        }); 
    }
}