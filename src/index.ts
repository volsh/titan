import express, { Express, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";

import photos from "./controller/photosController";
import orders from "./controller/ordersController";
import users from "./controller/usersController";

import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Error-handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err.message);
  res.status(500).send("Internal Server Error");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/photos", photos);
app.use("/orders", orders);
app.use("/users", users);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
