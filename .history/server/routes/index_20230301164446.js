import express from "express";
import { clientRoutes } from "./v1/client.js";
import managementRoutes from "./v1/management.js";
import generalRoutes from "./v1/general.js";
import salesRoutes from "./v1/sales.js";

const rootRouter = express.Router();

rootRouter.use("/client", clientRoutes);
