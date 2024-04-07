import express from "express";
import * as Controllers from "../controllers";

const router = express.Router();

// Define the route for managing URLs
router.post("/", Controllers.manage);

export default router;
