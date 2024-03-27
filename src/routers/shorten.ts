import express from "express";
import * as Controllers from "../controllers";

const router = express.Router();

router.post("/", Controllers.UrlShortener.UrlShortener);

export default router;
