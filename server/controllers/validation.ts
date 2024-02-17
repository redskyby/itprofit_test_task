import { Request, Response } from "express";

class Validation {
    async check(req: Request, res: Response) {
        return res.json({ Hello: "World" });
    }
}

export default new Validation();
