import { Response } from "../classes/response.js";
import { modelo_ingreso, modelo_registro } from "../models/model_user.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const servicio_ingreso = async (body) => {
    let password = await modelo_ingreso(body.usuario);
    if(!password) return new Response(404, 'Usuario no encontrado.');
    if(password instanceof Error) return new Response(500, password.message);

    const token = await bcrypt.compare(body.clave, password);
    if(!token) return new Response(401, 'Usuario o clave incorrectos.');
    const tkn = jwt.sign({ usuario: body.usuario }, 'clave_secreta', { expiresIn: '8h' });

    return new Response(200, tkn);
}

export const servicio_registro = async (body) => {
    const contraseña = await bcrypt.hash(body.clave, 10);
    if(contraseña instanceof Error) return new Response(500, contraseña.message);
    
    const rsp = await modelo_registro(body.usuario, contraseña);
    if(rsp instanceof Error) return new Response(500, rsp.message);

    return new Response(201, rsp);
}