import fs from 'fs';

export const saludoDb = () => {
    return 'Hola desde la base de datos';
}

export const listarArchivos = async () => {
    try {
        const archivos = await fs.promises.readdir('./pdfs');
        return archivos;
    } catch (error) {
        return error;
    }
}
