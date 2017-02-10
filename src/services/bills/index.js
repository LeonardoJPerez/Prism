'use strict';

var utils = require('./../../common/utils');
var config = require('./../../../config');

const baseUrl = config.api.congress.url;
const congress = Math.ceil((new Date().getFullYear() - 1789) / 2);

module.exports = {
    getBills: () => {
        let apiUrl = `${baseUrl}/bills?congress=${congress}&history.enacted=true`;
        return utils.executeRequest(apiUrl);
    },
    getActiveBills: () => {
        let apiUrl = `${baseUrl}/bills?history.active=true&order=last_action_at&per_page=50`;
        return utils.executeRequest(apiUrl);
    }
}