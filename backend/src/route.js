import express from 'express';
import { saludo, descargarArchivo } from './controller.js';
export const router = express.Router();

router.get('/', saludo);
router.get('/pdf', descargarArchivo);