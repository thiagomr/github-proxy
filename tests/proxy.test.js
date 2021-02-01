require('dotenv').config();

const request = require('supertest');
const Server = require('../src/app/server');
const { fakeProxy } = require('../mocks/proxy');

const server = new Server(fakeProxy);

describe('proxy', () => {
    it('should return a 200 response', async () => {
        const res = await request(server.app).get('/api/users');

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('ok');
    });
});
