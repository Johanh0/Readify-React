import express from "express";
import bcrypt from "bcrypt";
import { promisePool } from "../database/db.js";
import { generateToken, verifyToken } from "../utils/jwt.js";
import { authenticateToken } from "../middleware/auth.js";
const userRouter = express.Router();

userRouter.get("/profile", authenticateToken, (req, res) => {
  res.status(200).json({ message: "Access granted", user: req.user });
});

userRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //   Validate if the user data is complete
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  try {
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Try to insert new usert to the database
    const query =
      "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
    const values = [firstName, lastName, email, hashedPassword];

    const [results] = await promisePool.execute(query, values);

    res.status(200).json({
      message: "User created",
      id: results.id,
    });
  } catch (error) {
    console.error("Error trying to create the user:", error);
    res.status(500).json({ error: "Error creating the user" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //   Validate if the user data is complete
  if (!email || !password) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  try {
    // Search in the database the user
    const query = "SELECT * FROM users WHERE email = ?";
    const [user] = await promisePool.execute(query, [email]);

    if (!user.length) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user[0].password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = generateToken(user[0].id);

    res
      .cookie("authToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: true,
        maxAge: 30 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Login successful",
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        email: user[0].email,
        profile_image_url: user[0].profile_image_url,
        token,
      });
  } catch (error) {
    console.error("Error trying to login:", error);
    res.status(500).json({ error: "Error login" });
  }
});

userRouter.post("/logout", (req, res) => {
  res
    .clearCookie("authToken", {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    })
    .status(200)
    .json({ message: "Logout successful" });
});

export { userRouter };
