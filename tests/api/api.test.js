const request = require('supertest');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('../../index');

dotenv.config();

beforeAll(async () => {
    const uri = process.env.MONGO_URI_TEST || process.env.MONGO_URI;
    await mongoose.connect(uri);
}, 10000);

afterAll(async () => {
    await mongoose.connection.close();
});

describe('GET /users', () => {
    it('should return all users', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
