import express from "express";

const generalRouter = express.Router();

generalRouter.get("/user/:id");

export { generalRouter };
