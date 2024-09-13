

import { Router}    from "express";
import {createOrder} from "../controllers/payment.js";

const router = Router()
router.post("/create-order", createOrder);
// router.post("/webhook", receiveWebhook);

router.get("/success", (req, res) => res.send("Success"));

export default router