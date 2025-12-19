import express from 'express';
import {router as file} from './routes/route_file.js';
import {router as user} from './routes/route_user.js';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(file);
app.use(user);

app.listen(port, () => {
    console.log('El servidor esta escuchando en el puerto ' + port);  
})