import cors from 'cors';
import express from 'express';

const app: express.Application = express();
const port = 3333;

app.use(cors());

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

export { app };
