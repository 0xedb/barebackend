import homeRouter from './routes/home';
import graphApi from './routes/graphql';
import {PORT} from './utils/serversetup';
import helmet from './utils/headmiddleware';

import express, {Application, Request, Response} from 'express';

const app: Application = express();

app.all('*', helmet);

app.use(homeRouter);
app.use(graphApi);

app.listen(PORT, () => console.log(`App on http://0.0.0.0:${PORT}`));
