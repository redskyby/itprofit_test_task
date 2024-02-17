import { Request, Response } from "express";

class ValidationController {
    async check(req: Request, res: Response) {
        try {
            const { name, email, phone, text } = req.body;

            // if (!name || !email) {
            //     return res.status(402).json({ message: "Некорректный email или имя!" });
            // }
            // if (!phone) {
            //     return res.status(401).json({ message: "Некорректный номер!" });
            // }

            const RegEmail : RegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

            const checkEmail : boolean =RegEmail.test(email);

            if(!checkEmail){
                return res.status(403).json({ message: "email должен быть в формате test@test.ru" });
            }


            res.status(200).json({checkEmail});

        } catch (e) {
            return res.status(404).json(e);
        }
    }
}

export default new ValidationController();
