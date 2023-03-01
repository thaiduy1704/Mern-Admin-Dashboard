import express from "express";
import { clientRoutes } from "./v1/clientRouter.js";
import { managementRoutes } from "./v1/managementRouter.js";
import { generalRoutes } from "./v1/generalRouter.js";
import { salesRoutes } from "./v1/salesRouter.js";

const rootRouter = express.Router();

rootRouter.use("/client", clientRoutes);
rootRouter.use("/general", generalRoutes);
rootRouter.use("/management", managementRoutes);
rootRouter.use("/sales", salesRoutes);
