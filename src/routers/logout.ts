import express from "express";
import * as Controllers from "../controllers";

const router = express.Router();

router.get("/", Controllers.logout);

export default router;
