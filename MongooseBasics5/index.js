const mongoose = require("mongoose");
const User = require("./userModel");

mongoose.connect("mongodb://localhost:27017/mongoose-basic5", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ Connection failed:", err));

const testStaticMethod = async () => {
    try {
        // Insert test users
        await User.insertMany([
            { firstName: "Alice", lastName: "Smith", age: 25, email: "alice@example.com" },
            { firstName: "Bob", lastName: "Brown", age: 30, email: "bob@example.com" },
            { firstName: "Charlie", lastName: "Johnson", age: 25, email: "charlie@example.com" }
        ]);

        console.log("✅ Users inserted.");

        // Call static method
        const users = await User.findByAge(25);
        console.log("👤 Users aged 25:", users);
    } catch (error) {
        console.error("❌ Error:", error.message);
    } finally {
        mongoose.connection.close();
    }
};

testStaticMethod();
