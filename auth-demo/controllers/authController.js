const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ username, password });
    await user.save();

    req.session.user = user; // Log in user after registering
    res.json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    req.session.user = user;
    res.json({ message: "Logged in successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Logged out successfully" });
  });
};
