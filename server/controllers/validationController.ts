import { Request, Response } from "express";

class ValidationController {
    async check(req: Request, res: Response) {
        try {
            const { name, email, phone, message } = req.body;

            if (!name) {
                return res.status(403).json({
                    status: "error",
                    fields: {
                        inputName: "Некоректное имя",
                    },
                });
            }

            const regEmail: RegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            const checkEmail: boolean = regEmail.test(email);

            if (!checkEmail) {
                return res.status(403).json({
                    status: "error",
                    fields: {
                        inputName: "Некоректный email",
                    },
                });
            }

            if (!phone) {
                return res.status(403).json({
                    status: "error",
                    fields: {
                        inputName: "Некоректный номер телефона",
                    },
                });
            }

            res.status(200).json({
                status: "success",
                msg: "Ваша заявка успешно отправлена",
            });
        } catch (e) {
            return res.status(404).json(e);
        }
    }
}

export default new ValidationController();
