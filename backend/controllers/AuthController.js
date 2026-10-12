const UserRegistration = require("../models/userRegistration");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// Function to register a new user
const registerUser = async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await UserRegistration.create(userData);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "Email or userId already exists" });
    }
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserRegistration.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });
    const refreshToken = jwt.sign({ userId: user._id }, process.env.JWT_REFRESH_KEY, {
      expiresIn: "7d",
    });
    res.status(200).json({ data: user, message: "Login successful", accessToken:accessToken,refreshToken:refreshToken });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { registerUser, LoginUser };
