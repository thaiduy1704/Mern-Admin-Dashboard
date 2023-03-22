import express from "express";
import { getProduct } from "../../controllers/clientController.js";

const clientRouter = express.Router();

clientRouter.get("/product", getProduct);
clientRouter.get("/customer", getCustomer);

export { clientRouter };
