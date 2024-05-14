import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://talhabinay:talha126@cluster0.9fk5in0.mongodb.net/");
const db = mongoose.connection;

db.once("open", () => {
  console.log("MongoDB connected");
});

db.on("error", (error) => {
  console.log(error);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/contact", contactRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
