const mongoose = require('mongoose');
const User = require('./userModel');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

// Insert a new user
const createUser = async () => {
    try {
        const user = new User({
            name: 'Alice',
            age: 30,
            email: 'alice@example.com'
        });

        await user.save();
        console.log('User created successfully', user);
    } catch (err) {
        console.error('Error creating user', err);
    } finally {
        mongoose.connection.close();
    }
};

createUser();