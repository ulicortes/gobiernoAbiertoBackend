import { saludoDb } from "./model.js";
import path from 'path';

export const saludo = (req, res) => {
    let saludo = saludoDb();
    res.send(saludo);
}

export const descargarArchivo = (req, res) => {
    const pdf = path.join('haberes_agosto_2017.pdf');
    res.download(pdf, 'haberes_agosto_2017.pdf', (err) => {
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