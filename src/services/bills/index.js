'use strict';

var utils = require('./../../common/utils');

const baseUrl = config.api.congress.url;
const congress = Math.ceil((new Date().getFullYear() - 1789) / 2);

module.exports = {
    getBills: () => {
        let apiUrl = `${baseUrl}/bills?congress={congress}&history.enacted=true`;
        return utils.executeRequest(apiUrl);
    }
}