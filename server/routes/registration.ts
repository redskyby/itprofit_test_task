import { Router } from "express";

const router = Router();

router.post("/registration", async (req, res) => {
    try {
        // Здесь можно добавить логику проверки и сохранения нового пользователя в базе данных
        // Пока здесь просто отправляем успешный статус 200 как случайный результат
        const random = Math.random();
        if (random < 0.5) {
            // Вероятность ошибки 50%
            throw new Error("Server error");
        } else {
            // Успешная регистрация
            res.status(200).json({ message: "Registration successful" });
        }
    } catch (err) {
        // Обработка ошибок
        console.error(err);
        res.status(400).json({ message: "Registration failed" });
    }
});

export default router;
