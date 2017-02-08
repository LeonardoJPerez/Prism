var locationService = require('./src/location');
var legislatorsService = require('./src/legislators');

locationService.getLocationCoordinates('30328')
    .then((res) => {
        legislatorsService.getLegislatorsByLocation(res)
            .then((result) => {
                console.log(JSON.stringify(result, null, 4));
            });
    });

