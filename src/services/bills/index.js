'use strict';

var utils = require('./../../common/utils');

const baseUrl = config.api.congress.url;

module.exports = {
    getBills: () => {
        let apiUrl = `${baseUrl}/districts/locate?latitude=${location.lat}&longitude=${location.lng}`;
        return utils.executeRequest(apiUrl);
    }
}