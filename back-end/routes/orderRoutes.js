import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  getMyOrders,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
router.route("/myorders").get(protect, getMyOrders);

export default router;
