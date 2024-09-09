import expres from "express";
import { auth } from "../utils/auth.js";
import { getOrders, order, updateOrderStatus } from "../controllers/order.js";

const orderRouter = expres.Router();

orderRouter.post("/addtoorder", auth, order);
orderRouter.post("/getorders", auth, getOrders);
orderRouter.post("/updateorder", auth, updateOrderStatus);

export default orderRouter;
