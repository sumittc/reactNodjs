const express = require("express");
const { body, validationResult } = require("express-validator");
const Users = require("../models/Users");
const router = express.Router();

// Create user using: POST "/api/auth/createuser" (Doesn't require auth)
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),
    body("username").isLength({ min: 3 }).withMessage("Username must be at least 3 characters"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 3 }).withMessage("Password must be at least 3 characters"),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check if user already exists
      let existingUser = await Users.findOne({ where: { email: req.body.email } });
      if (existingUser) {
        return res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }

      // Create new user
      const newUser = await Users.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      res.status(200).json({ message: "User created successfully", user: newUser });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
