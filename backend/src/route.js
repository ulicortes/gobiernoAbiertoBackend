import express from 'express';
import { saludo, descargarArchivo, listado } from './controller.js';
export const router = express.Router();

router.get('/', saludo);
router.get('/jorge', (req, res) => {
    res.send('Hola Jorge');
});
router.get('/pdf/:nombre', descargarArchivo);
router.get('/listado', listado);
// router.post('api/nuevo', nuevoPdf)