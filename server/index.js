import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import connectDB from "./config/db.js";
import quoteRoutes from "./routes/quoteRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(helmet());
app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(express.json());

app.use("/api/quotes", quoteRoutes);

app.get("/", (req, res) => {
    res.send("Professional Services API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});