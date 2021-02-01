require('dotenv').config();

const Server = require('./app/server');
const logger = require('./lib/logger');
const { githubProxy } = require('./lib/proxy');

(async () => {
    try {
        const server = new Server(githubProxy);
        server.listen();
    } catch (e) {
        logger.error(e.stack);
        process.exit(1);
    }
})();
