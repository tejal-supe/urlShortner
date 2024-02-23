import express from 'express';
import { getShortUrl, redirectDirectly, redirectToOriginal } from '../controller/index.js';
const router = express.Router();

router.post("/postUrl",getShortUrl);
router.get("/redirect",redirectToOriginal)
// router.get("/:shortId",redirectDirectly)
export default router;