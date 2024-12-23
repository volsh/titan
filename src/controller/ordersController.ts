import express, { Request, Response } from "express";
import { createOrder, getOrdersOfUser } from "../repository/orderRepository";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  createOrder(req.body)
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(400).send(err.message));
});

router.get("/orderOfUser", (req: Request, res: Response) => {
  if (!req.query?.userId || isNaN(req.query.userId as unknown as number)) {
    res.status(400).send(new Error("bad request"));
  }
  const { userId } = req.query;
  getOrdersOfUser(parseInt(userId as string))
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => res.status(400).send(err.message));
});

export default router;
