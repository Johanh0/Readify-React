// Imports
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const app = express();

const PORT = process.env.PORT || 3000;
const API_VERSION = "/api/v1";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "../public")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// Routes IMPORTS
import { userRouter } from "./routes/user.js";
import { ebookRouter } from "./routes/ebook.js";

app.use(`${API_VERSION}/user`, userRouter);
app.use(`${API_VERSION}/ebook`, ebookRouter);

app.listen(PORT, () => {
  console.log(`PORT is listening on ${PORT}`);
});
