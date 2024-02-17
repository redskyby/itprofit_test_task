import express, { Express } from "express";
import cors from "cors";
import routes from "./routes";

const app: Express = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/", routes);

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
