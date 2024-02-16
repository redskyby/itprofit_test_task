import express , {Express} from 'express';


const app: Express = express();
const port = 3000;


app.use(express.json());

// Пример маршрута

const start = async () => {
    app.listen(port, () => {
        console.log(`Сервер запущен на порту ${port}`);
    });
}

start();


