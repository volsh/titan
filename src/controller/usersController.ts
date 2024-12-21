import express, { Request, Response } from "express";
import { createUser } from "../repository/userRepository";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  createUser(req.body)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).send(err.message));
});

export default router;
