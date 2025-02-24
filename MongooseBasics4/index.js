const mongoose = require('mongoose');
const User = require('./userModel');

mongoose
  .connect("mongodb://localhost:27017/mongoose-basics4", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

  const testInstanceMethod = async () => {
    try {
        const user = new User({
            firstName: "John",
            lastName: "Doe",
            age: 25,
            email: "john@example.com",
        });

        await user.save();
        console.log("User created:", user);
        
        // Call the instance method
        console.log("Full name:", user.getFullName());
    } catch (error) {
        console.error("Error:", error.message);
    }
    finally {
        mongoose.disconnect();
    }
  };

  testInstanceMethod();