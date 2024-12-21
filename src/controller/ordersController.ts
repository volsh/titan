import express, { Request, Response } from "express";
import { createOrder } from "../repository/orderRepository";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  createOrder(req.body)
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(400).send(err.message));
});

export default router;
