import express from "express";
import { getQRConfig, saveQRConfig } from "../controllers/marketing.js";

const router = express.Router();

router.get("/qr-config", getQRConfig);
router.post("/qr-config", saveQRConfig);

export default router;
