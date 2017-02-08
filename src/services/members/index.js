'use strict';

var unirest = require('unirest');

module.exports = {
    getMembersByLocation: (location) => {
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
    },
    getMembersByBioguideId: (bid) => {
        return new Promise((fulfill, reject) => {
            var apiUrl = `https://congress.api.sunlightfoundation.com/legislators?bioguide_id=${bid}&all_legislators=true`;
            var Request = unirest.get(apiUrl);
            Request
                .header('Accept', 'application/json')
                .end((response) => {
                    if (response.status === 200) {
                        fulfill(response.body.results[0]);
                    } else {
                        reject(response.error);
                    }
                });
        });
    },
    searchMembersByString: (searchString) => {
        return new Promise((fulfill, reject) => {
            var apiUrl = `https://congress.api.sunlightfoundation.com/legislators?query=${searchString}`;
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