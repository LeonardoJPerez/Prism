var locationService = require('./../../../services/location');

module.exports = {
    routes: [{
        method: 'GET',
        path: '/location/{zipcode}',
        handler: function (request, reply) {           
            locationService.getLocationCoordinates(request.params.zipcode)
                .then((res) => {                    
                    reply(JSON.stringify(res, null, 4));
                }, (error) => {
                    reply(JSON.stringify(error, null, 4));
                });
        }
    }]
}