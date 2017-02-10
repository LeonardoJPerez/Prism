'use strict';

var utils = require('./../../common/utils');

module.exports = {
    getLocationCoordinates: (zipcode) => {
        return utils.executeRequest(`http://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&sensor=false`)
            .then((res) => {
                return res;
            });
    }
}