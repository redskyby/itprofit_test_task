import express, { Request, Response } from 'express';

// Создаем экземпляр приложения Express
const app = express();
const port = 3000;

// Middleware для обработки запросов в формате JSON
app.use(express.json());

// Пример маршрута

// Запускаем сервер
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});


