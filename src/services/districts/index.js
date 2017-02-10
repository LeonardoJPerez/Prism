'use strict';

var utils = require('./../../common/utils');
var config = require('./../../../config');

const baseUrl = config.api.congress.url;

module.exports = {
    getDistrictsByCoordinates: (location) => {
        let apiUrl = `${baseUrl}/districts/locate?latitude=${location.lat}&longitude=${location.lng}`;
        return utils.executeRequest(apiUrl);
    }    
};