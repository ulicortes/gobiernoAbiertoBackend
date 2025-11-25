import express from 'express';
import { saludo, descargarArchivo } from './controller.js';
export const router = express.Router();

router.get('/', saludo);
router.get('/jorge', (req, res) => {
    res.send('Hola Jorge');
});
router.get('/pdf', descargarArchivo);