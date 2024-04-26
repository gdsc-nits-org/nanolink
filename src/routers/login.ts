import express from "express";
import * as Controllers from "../controllers";
import { checklogin } from "src/middlewares";
const router = express.Router();

router.post("/", checklogin, Controllers.login.login);

export default router;
