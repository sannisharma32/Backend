import express from "express";
import cors from "cors"; // corrected import for CORS
import cookieParser from "cookie-parser";

const app = express();
app.use("/app/v1/user/", (req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});

app.use("/users", (req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
}, userRouter);
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

// /router import //
import userRouter from './routes/user.router.js'

// routes delaration //


app.use("/api/v1/users", userRouter)

export  {app};