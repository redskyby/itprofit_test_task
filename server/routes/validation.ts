import { Router } from "express";
import validation from "../controllers/validationController";

const router = Router();
router.post("/check", validation.check);

export default router;
