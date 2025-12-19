import express from 'express';
import { controlador_ingreso, controlador_registro } from '../controllers/controller_user.js';

export const router = express.Router();

router.post('/ingreso', controlador_ingreso);
router.post('/registro', controlador_registro);