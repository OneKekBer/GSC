import { Express } from "express";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(` port is ${port}`);
});
