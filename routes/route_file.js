import express from 'express';
import { buscarArchivo_C, listado_C } from '../controllers/controller_file.js';

export const router = express.Router();

router.get('/:seccion/:nombre', buscarArchivo_C);
router.get('/:seccion', listado_C);
