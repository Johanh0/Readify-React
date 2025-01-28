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
  const { first_name, last_name, email, password } = req.body;

  //   Validate if the user data is complete
  if (!first_name || !last_name || !email || !password) {
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
      "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";
    const values = [first_name, last_name, email, hashedPassword];

    const [result] = await promisePool.execute(query, values);

    // Search in the database the user and login after created the user
    const query2 = "SELECT * FROM users WHERE email = ?";
    const [user] = await promisePool.execute(query2, [email]);

    if (!user.length) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user[0].password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    // Generate JWT token
    const token = generateToken(user[0].user_id);

    res
      .cookie("authToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: true,
        maxAge: 30 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Account created successful",
        first_name: user[0].first_name,
        last_name: user[0].last_name,
        email: user[0].email,
        profile_image_url: user[0].profile_image_url,
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
        first_name: user[0].first_name,
        last_name: user[0].last_name,
        email: user[0].email,
        profile_image_url: user[0].profile_image_url,
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
