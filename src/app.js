import express from "express";
import cors from "cors"; // corrected import for CORS
import cookieParser from "cookie-parser";

const app = express();

// Apply CORS middleware with configured options
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Set allowed origin from environment variable
    credentials: true // Allow cookies and credentials in cross-origin requests
}));

// Middleware to parse JSON and URL-encoded data with size limits
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Middleware to parse cookies
app.use(cookieParser());

export default app;
