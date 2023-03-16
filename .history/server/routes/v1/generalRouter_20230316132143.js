import express from "express";
import { getUser, getAllUser } from "../../controllers/generalController.js";

const generalRouter = express.Router();

generalRouter.get("/user", getAllUser);
generalRouter.get("/user/:id", getUser);

export { generalRouter };
