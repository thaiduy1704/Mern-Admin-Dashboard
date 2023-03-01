import express from "express";
import { clientRouter } from "./v1/clientRouter.js";
import { managementRouter } from "./v1/managementRouter.js";
import { generalRouter } from "./v1/generalRouter.js";
import { salesRouter } from "./v1/salesRouter.js";

const rootRouter = express.Router();

rootRouter.use("/client", clientRouter);
rootRouter.use("/general", generalRouter);
rootRouter.use("/management", managementRoutr);
rootRouter.use("/sales", salesRouter);

export { rootRouter };
