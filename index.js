const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const User = require('./models/User');

const dbURI = process.env.NODE_ENV === 'test' ? process.env.MONGO_URI_TEST : process.env.MONGO_URI;

mongoose.connect(dbURI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error", err));

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
});

app.put('/users/:id', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
});

app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(5000, () => console.log('Server running on port 5000'));
}

module.exports = app;
