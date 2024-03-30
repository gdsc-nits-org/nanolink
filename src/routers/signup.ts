import express from "express";
import * as Controllers from "../controllers";
import { check } from "src/middlewares";

const router = express.Router();

router.post("/", check, Controllers.signup.signup);

export default router;
