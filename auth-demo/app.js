const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(
  session({
    secret: "supersecretkey",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }, // 1 day
  })
);

// Routes
app.use("/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
