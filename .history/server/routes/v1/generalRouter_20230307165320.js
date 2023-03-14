import express from "express";
import { getUserById } from "../../controllers/generalController.js";

const generalRouter = express.Router();

generalRouter.get("/user/:id", getUser);

export { generalRouter };
