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

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://readify-app-f78abbe1f69f.herokuapp.com/"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// Routes IMPORTS
import { userRouter } from "./routes/user.js";
import { ebookRouter } from "./routes/ebook.js";

app.use(`${API_VERSION}/user`, userRouter);
app.use(`${API_VERSION}/ebook`, ebookRouter);

app.get("*", (req, res) => {
<<<<<<< HEAD
  res.sendFile(path.join(__dirname, "../dist/index.html"));
=======
  res.sendFile(path.join("../dist/index.html"));
>>>>>>> develop
});

app.listen(PORT, () => {
  console.log(`PORT is listening on ${PORT}`);
});
