'use strict';

var utils = require('./../../common/utils');
var config = require('./../../../config');

module.exports = {
    getMembersByLocation: (location) => {
        return utils.executeRequest(`${config.api.congress.url}/legislators/locate?latitude=${location.lat}&longitude=${location.long}`);
    },
    getMembersByBioguideId: (bid) => {
        return utils.executeRequest(`${config.api.congress.url}/legislators?bioguide_id=${bid}&all_legislators=true`);
    },
    searchMembersByString: (searchString) => {
        return utils.executeRequest(`${config.api.congress.url}/legislators?query=${searchString}`);
    }
}