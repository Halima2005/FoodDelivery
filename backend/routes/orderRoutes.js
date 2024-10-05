import express from "express";
import { listOrders, placeOrder, upadateStatus, userOrders, verifyOrder } from "../controllers/orderController.js";
import authMiddleware from "../middlewire/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrders);
orderRouter.get('/list',listOrders);
orderRouter.post("/status",upadateStatus)
export default orderRouter;