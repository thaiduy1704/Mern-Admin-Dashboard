import express from "express";

const clientRouter = express.Router();

clientRouter.get("/product");

export { clientRouter };
