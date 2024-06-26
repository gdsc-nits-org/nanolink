import express from "express";
import * as Controllers from "../controllers";
import { isAuth } from "src/middlewares";
const router = express.Router();

router.post("/", isAuth, Controllers.UrlShortener.UrlShortener);

export default router;
