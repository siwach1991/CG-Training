import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import {createConnection} from './dbconfig/connection.js';
import {router as registerRoute} from './routes/registerRoute.js';
import {router as loginRoute} from './routes/loginRoute.js';
import {router as taskRoute} from './routes/taskRoute.js';

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(registerRoute);
app.use(loginRoute);
app.use(taskRoute);
createConnection();

app.listen(4000,()=>{
    console.log('server is running on 4000 port');
})

