import { buscarArchivo_M, listarTodos_M } from "./model.js";
import path from 'path';

export const buscarArchivo_S = async (seccion, nombre) => {
    const archivo = await buscarArchivo_M(seccion, nombre);
    if (archivo.length === 0) {
        return { status: 404, return: 'El archivo solicitado no se encuentra.' };
    }
    const pdf = path.join('./pdfs', `${archivo}`);
    return { status: 200, return: pdf };
}

export const listarArchivos_S = async (seccion) => {
    const archivos = await listarTodos_M(seccion);
    if(archivos instanceof Error){
        return { status: 500, return: archivos.message };
    }
    return { status: 200, return: archivos };
}