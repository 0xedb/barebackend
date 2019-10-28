import homeRouter from './routes/home';
import {PORT} from './utils/serversetup';
import express, {Application, Request, Response} from 'express';

const app: Application = express();

app.use(homeRouter);

app.listen(PORT, () => console.log(`App on http://0.0.0.0:${PORT}`));
