'use strict';

var utils = require('./../../common/utils');
var config = require('./../../../config');

module.exports = {
    getDistrictsByCoordinates: (location) => {
        return utils.executeRequest(`${config.api.congress.url}/districts/locate?latitude=${location.lat}&longitude=${location.long}`)
            .then((res) => {
                return res;
            });;
    },
    getDistrictsByZipcode: (zipcode) => {
        return utils.executeRequest(`${config.api.congress.url}/districts/locate?zip=${zipcode}`)
            .then((res) => {
                return res;
            });;
    }
}