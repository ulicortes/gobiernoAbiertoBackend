import express from 'express';
import { router as file } from './routes/route_file.js';
import { router as user } from './routes/route_user.js';
import bodyParser from 'body-parser';
import RegexMiddleware from './middlewares/regex.js';
import rateLimit from 'express-rate-limit';

const app = express();
const port = process.env.PORT;
const limiter = rateLimit({
  windowMs: 15*60*1000,
  limit: 100,
  message: "Se llego al maximo de solicitudes. Intenta dentro de 15 minutos."
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(limiter, file);
app.use(RegexMiddleware, user);

app.listen(port, () => {
  console.log('El servidor esta escuchando en el puerto ' + port);
})