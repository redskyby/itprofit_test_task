import express, { Express } from "express";

const app: Express = express();
const port = 3000;

app.use(express.json());

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    }catch (e) {
        console.log(e);
    }
};

start();
