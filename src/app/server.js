const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('../config/swagger.json');
const router = require('./router');
const logger = require('../lib/logger');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8000;

        this.setupMiddlewares();
        this.setupRoutes();
    }

    formatRequestLog(tokens, req, res) {
        return JSON.stringify({
            date: tokens['date'](req, res, 'iso'),
            method: tokens['method'](req, res),
            url: tokens['url'](req, res),
            statusCode: tokens['status'](req, res),
            responseTime: `${tokens['response-time'](req, res)} ms`
        });
    }

    setupMiddlewares() {
        this.app.use(express.json());
        this.app.use(morgan(this.formatRequestLog));
    }

    setupRoutes() {
        this.app.use('/', router);
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }

    listen() {
        this.app.listen(this.port, () => logger.info(`listen at ${this.port}`));
    }
}

module.exports = Server;
