import express from "express";
import { getUserById } from "../../controllers/generalController";

const generalRouter = express.Router();

generalRouter.get("/user/:id", getUserById);

export { generalRouter };
