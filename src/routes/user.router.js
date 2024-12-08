import { Router } from "express";
import registerUser from "../controllers/user.controller.js";

const router = Router(); // Correct initialization of the Router instance

router.route("/register").post(registerUser); // Define the POST route

export default router; // Export the router
