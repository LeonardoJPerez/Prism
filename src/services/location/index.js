'use strict';

var unirest = require('unirest');

module.exports = {
    getLocationCoordinates: (zipcode) => {
        return new Promise((fulfill, reject) => {
            var url = `http://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&sensor=false`;
            var Request = unirest.get(url);
            Request
                .header('Accept', 'application/json')
                .end((response) => {
                    if (response.status === 200) {
                        var googleGeoAPIResult = response.body.results[0];
                        fulfill({
                            lat: googleGeoAPIResult.geometry.location.lat,
                            long: googleGeoAPIResult.geometry.location.lng
                        });
                    } else { reject(response.error); }
                });
        });
    }
}