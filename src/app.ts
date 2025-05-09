// import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './routes';
// import router from './routes';


const app: Application = express();
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',

];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }),
);

//parsers(middlewares)
app.use(express.json());

//application routes

app.use('/api', router);

const test = async (req: Request, res: Response) => {
  res.send('Hy Staffing Server is running..');
};

app.get('/', test);



export default app;
