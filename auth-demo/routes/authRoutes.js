const express = require("express");
const { register, login, logout } = require("../controllers/authController");
const requireLogin = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/dashboard", requireLogin, (req, res) => {
  res.json({ message: `Welcome, ${req.session.user.username}` });
});

module.exports = router;
