import express from "express";
import * as Controllers from "../controllers";

const router = express.Router();

router.get("/", Controllers.Landing.land);

export default router;
