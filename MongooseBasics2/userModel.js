const mongoose = require('mongoose');

// Define a schema
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

// Create a model
const User = mongoose.model('User', userSchema);

module.exports = User;