require('dotenv').config();

const request = require('supertest');
const Server = require('../src/app/server');
const { fakeProxy } = require('../mocks/proxy');

const server = new Server(fakeProxy);

describe('healthcheck', () => {
    it('should return 200', async () => {
        const res = await request(server.app).get('/ping');
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('pong');
    });
});
