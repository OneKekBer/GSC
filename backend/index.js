import { Express } from "express";

const port = 4000;
const app = express();

app.use(cors());

app.listen(port, () => {
    console.log(`server started on ${port}`);
});
