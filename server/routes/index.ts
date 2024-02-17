import { Router } from "express";
import validation from "./validation";

const routers = Router();
routers.use("/validation", validation);

export default routers;
