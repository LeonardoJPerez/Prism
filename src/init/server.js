'use strict';

const Glue = require('glue');

const manifest = {
    connections: [
        {
            port: 8031,
            host: 'localhost',
            labels: ['api']
        }     
    ],
    registrations: [
        {
            plugin: {
                register: './../routes/v1/bills',
                options: {
                    basePath: '/v1',
                    select: ['api'],
                    uglify: true
                }
            }
        }
    ]
};

Glue.compose(manifest, { relativeTo: __dirname }, (err, server) => {
    if (err) {
        throw err;
    }
    server.start((err) => {
        console.log(`Server running at: ${server.connections[0].info.uri}`);
        console.log('Available routes:');
        var info = server.table()[0];
        info.table.forEach((route) => {
            console.log('\t', route.public.path, '\t', route.public.method.toUpperCase());
        });
    });
});