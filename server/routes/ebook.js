import express from "express";
import { promisePool } from "../database/db.js";
const ebookRouter = express.Router();

ebookRouter.get("/all", async (req, res) => {
  try {
    const query = "SELECT * FROM ebooks LIMIT 20";
    const [results] = await promisePool.execute(query);

    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error("Error trying to access ebooks:", error);
    res.status(500).json({ error: "Error accessing ebooks" });
  }
});

ebookRouter.get("/trending", async (req, res) => {
  try {
    const query = "SELECT * FROM ebooks WHERE trending = 1 LIMIT 5";
    const [results] = await promisePool.execute(query);

    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error("Error trying to access ebooks:", error);
    res.status(500).json({ error: "Error accessing ebooks" });
  }
});

ebookRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      error: "eBook ID is required",
    });
  }

  try {
    const query = "SELECT * FROM ebooks WHERE ebook_id = ?";
    const [results] = await promisePool.execute(query, [id]);

    if (!results) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error("Error trying to access ebook:", error);
    res.status(500).json({ error: "Error accessing ebook" });
  }
});

ebookRouter.get("/search/:category/:search", async (req, res) => {
  const { category, search } = req.params;

  if (!category || !search) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  try {
    const query = `SELECT * FROM ebooks WHERE category = ? AND title LIKE CONCAT('%', ?, '%')
`;
    const [results] = await promisePool.execute(query, [category, search]);

    if (!results) {
      return res.status(404).json({ message: "eBooks not found" });
    }

    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error("Error trying to access ebook:", error);
    res.status(500).json({ error: "Error accessing ebook" });
  }
});

export { ebookRouter };
