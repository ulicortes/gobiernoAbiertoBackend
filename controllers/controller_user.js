import { servicio_ingreso, servicio_registro } from "../services/service_user.js";

export const controlador_ingreso = async (req, res) => {
    const rsp = await servicio_ingreso(req.body);
    res.status(rsp.getStatus()).send(rsp.getReturn());
};

export const controlador_registro = async (req, res) => {
    const rsp = await servicio_registro(req.body);
    res.status(rsp.getStatus()).send(rsp.getReturn());
}