const mongoose = require("mongoose");
const User = require("./userModel");

mongoose
  .connect("mongodb://localhost:27017/mongoose_basics3", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Function to insert users*******************************************

// const insertUsers = async () => {
//   try {
//     const users = await User.insertMany([
//       { name: "Alice", age: 25, email: "alicae@example.com" },
//       { name: "Bob", age: 28, email: "bob@example.com" },
//       { name: "Chaplin", age: 30, email: "chaplin@example.com" },
//     ]);
//     console.log("Users inserted:", users);
//   } catch (error) {
//     console.error("Error inserting users:", error);
//   }
// };

// // Call function to insert
// insertUsers();

// Function to find users*********************************************

// const findUsers = async () => {
//   try {
//     // Find all users
//     const users = await User.find();
//     console.log("✅ All Users:", users);

//     // Find a user by name
//     const user = await User.findOne({ name: "Alice" });
//     console.log("✅ Found User:", user);
//   } catch (error) {
//     console.error("❌ Error finding users:", error);
//   }
// };

// // Call function
// findUsers();

// Function to update users*********************************************

// const updateUsers = async () => {
//     try {
//         // Update one user
//         await User.updateOne({ name: "Alice" }, { $set: { age: 26 } });
//         console.log("✅ Alice's age updated");

//         // Update multiple users
//         await User.updateMany({ age: { $gt: 25 } }, { $set: { status: "active" } });
//         console.log("✅ Users older than 25 updated");
//     } catch (error) {
//         console.error("❌ Error updating users:", error);
//     }
// };

// // Call function
// updateUsers();

// Function to delete users*********************************************
const deleteUsers = async () => {
    try {
        // Delete one user
        await User.deleteOne({ name: "Charlie" });
        console.log("✅ Charlie deleted");

        // Delete multiple users
        await User.deleteMany({ age: { $lt: 26 } });
        console.log("✅ Users younger than 26 deleted");
    } catch (error) {
        console.error("❌ Error deleting users:", error);
    }
};

// Call function
deleteUsers();
