const mongoose = require('mongoose');
const User = require('../../models/User');

describe('User Model Test', () => {
    it('should create a user instance with name, email, and age', () => {
        const user = new User({
            name: 'Test User',
            email: 'test@example.com',
            age: 25
        });

        expect(user.name).toBe('Test User');
        expect(user.email).toBe('test@example.com');
        expect(user.age).toBe(25);
    });

    it('should have required fields', () => {
        const user = new User();

        const error = user.validateSync();
        expect(error.errors.name).toBeDefined();
        expect(error.errors.email).toBeDefined();
        expect(error.errors.age).toBeDefined();
    });
});
