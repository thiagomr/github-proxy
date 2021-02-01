require('dotenv').config();

const Server = require('./app/server');
const logger = require('./lib/logger');

(async () => {
    try {
        const server = new Server(logger);
        server.listen();
    } catch (e) {
        logger.error(e.stack);
        process.exit(1);
    }
})();
