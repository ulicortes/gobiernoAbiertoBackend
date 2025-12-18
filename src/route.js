import express from 'express';
import { buscarArchivo_C, listado_C } from './controller.js';

export const router = express.Router();

router.get('/pdf/:seccion/:nombre', buscarArchivo_C);
router.get('/:seccion', listado_C);
