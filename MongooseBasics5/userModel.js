const mongoose = require("mongoose");

// Define schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, min: 18, required: true },
    email: { type: String, required: true, unique: true }
});

// Define a static method
userSchema.statics.findByAge = function (age) {
    return this.find({ age });
};

// Create model
const User = mongoose.model("User", userSchema);

module.exports = User;
