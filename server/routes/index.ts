import { Router } from "express";
import validation from "./validation";
import ping from "./ping";
import registration from "./registration";

const routers = Router();
routers.use("/validation", validation);
routers.use("/ping", ping);
routers.use("/registration", registration);

export default routers;
