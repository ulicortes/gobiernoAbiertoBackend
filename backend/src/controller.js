import { listarArchivos, saludoDb } from "./model.js";
import path from 'path';

export const saludo = (req, res) => {
    let saludo = saludoDb();
    res.send(saludo);
}

export const descargarArchivo = (req, res) => {
    let {nombre} = req.params;
    const pdf = path.join('./pdfs', `${nombre}.pdf`);
    res.download(pdf, `${nombre}.pdf`, (err) => {
        if (err) {
            res.status(500).send({
                message: "No se puede descargar el archivo. " + err,
            });
            if (err.code === 'ENOENT') {
                return res.status(404).send('El archivo solicitado no se encuentra.');
            }
            return res.status(500).send('Error interno del servidor al procesar la descarga.');
        }
    });
}

export const listado = async (req, res) => {
    try {
        const archivos = await listarArchivos();
        return res.status(200).json(archivos);
    } catch (error) {
        res.status(500).send(error.message);
    }
}