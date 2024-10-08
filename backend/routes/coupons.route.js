import { Router } from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { getCoupon, validateCoupon } from "../controller/coupon.controller.js";
const router = Router();

router.get("/",protectedRoute,getCoupon);
router.get("/validate",protectedRoute,validateCoupon);

export default router;