import express from 'express';
import {router} from './src/route.js';

const app = express();
const port = 3000;

app.get('/', router);
app.listen(port, () => {
    console.log('El servidor esta escuchando en el puerto ' + port);  
})