import { Router } from "express";
import validation from "../controllers/validation";

const router = Router();
router.get("/check", validation.check);

export default router;
