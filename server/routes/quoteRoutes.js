import express from "express";
import Lead from "../models/Lead.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const {
            fullName,
            email,
            phone,
            moveType,
            moveDate,
            movingFrom,
            movingTo,
            propertySize,
            moveDistance,
            services,
            message,
        } = req.body;

        if (
            !fullName ||
            !email ||
            !phone ||
            !moveType ||
            !moveDate ||
            !movingFrom ||
            !movingTo ||
            !propertySize ||
            !moveDistance
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill out all required fields.",
            });
        }

        const lead = await Lead.create({
            fullName,
            email,
            phone,
            moveType,
            moveDate,
            movingFrom,
            movingTo,
            propertySize,
            moveDistance,
            services: services || [],
            message: message || "",
        });

        res.status(201).json({
            success: true,
            message: "Quote request submitted successfully.",
            lead,
        });
    } catch (error) {
        console.error("Quote route error:", error.message);

        res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
        });
    }
});

export default router;