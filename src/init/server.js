'use strict';

const config = require('./../../config');
const Hapi = require('hapi');
const routes = require('./routes');

const server = new Hapi.Server();
server.connection({
    host: config.server.host,
    port: config.server.port
});

routes.handlers.forEach((route) => {
    server.route(route);
});

server.start((err) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${server.info.uri}`);
    console.log('Available routes:');
    var info = server.table()[0];
    info.table.forEach((route) => {
        console.log('\t', route.public.path, '\t', route.public.method.toUpperCase());
    });
});