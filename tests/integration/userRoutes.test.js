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

describe('User API Integration', () => {
    it('should POST a new user', async () => {
        const res = await request(app)
            .post('/users')
            .send({ name: 'Test', email: 'test@mail.com', age: 30 });

        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe('Test');
        expect(res.body.email).toBe('test@mail.com');
        expect(res.body.age).toBe(30);
    }, 10000);
});
