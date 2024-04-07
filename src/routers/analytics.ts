import express from "express";
import * as Controllers from "../controllers";
import * as Analytics from "../controllers/analytics";

const router = express.Router();

// Endpoint to get analytics data
router.get("/", Controllers.Analytics.getAnalytics);

export default router;
