import fs from 'fs';

export const buscarArchivo_M = async (seccion, nombre) => {
    const archivos = await fs.promises.readdir(`./pdfs/${seccion}`);
    const archivo = archivos.filter(a => a === `${nombre}.pdf`);
    return `${seccion}/${archivo}`;
}

export const listarTodos_M = async (seccion) => {
    const archivos = await fs.promises.readdir(`./pdfs/${seccion}`);
    return archivos;
}
