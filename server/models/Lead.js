import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        moveType: {
            type: String,
            required: true,
            enum: ["Residential", "Commercial"],
        },
        moveDate: {
            type: Date,
            required: true,
        },
        movingFrom: {
            type: String,
            required: true,
            trim: true,
        },
        movingTo: {
            type: String,
            required: true,
            trim: true,
        },
        propertySize: {
            type: String,
            required: true,
        },
        moveDistance: {
            type: String,
            required: true,
        },
        services: {
            type: [String],
            default: [],
        },
        message: {
            type: String,
            default: "",
            trim: true,
        },
        status: {
            type: String,
            enum: [
                "new",
                "contacted",
                "quoted",
                "scheduled",
                "completed",
                "closed",
            ],
            default: "new",
        },
    },
    {
        timestamps: true,
    }
);

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;