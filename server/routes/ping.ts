import { Router } from "express";

const check = {
    status: "success",
    message: "Server is ready",
};

const router = Router();

router.get("/ping", (req, res) => {
    try {
        res.status(200).json(check);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
