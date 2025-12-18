import { buscarArchivo_S, listarArchivos_S } from './service.js';

export const buscarArchivo_C = async (req, res) => {
    let { seccion, nombre } = req.params;
    try {
        const rsp = await buscarArchivo_S(seccion, nombre);
        if (rsp.status === 404) {
            throw rsp;
        }
        return res.download(rsp.return, `${nombre}.pdf`);
    } catch (error) {
        res.status(error.status).send(error.return);
    }
}

export const listado_C = async (req, res) => {
    let { seccion } = req.params;
    try {
        const archivos = await listarArchivos_S(seccion);
        return res.status(archivos.status).json(archivos.return);
    } catch (error) {
        res.status(500).send(error.message);
    }
}