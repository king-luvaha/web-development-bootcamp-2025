const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
});

// Define an instance method
userSchema.methods.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

// Create model
const user = mongoose.model('User', userSchema);

module.exports = user;