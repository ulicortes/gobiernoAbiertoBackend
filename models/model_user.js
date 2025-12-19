import bcrypt from 'bcrypt';

export const modelo_ingreso = async (user) => {
    if(user !== "uli") return null;
    const pass = await bcrypt.hash("1234", 10);
    return pass;
}

export const modelo_registro = async (usuario, clave) => {
    return {"user": usuario, "pass":clave};
}