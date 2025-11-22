export const saludoDb = () => {
    return 'Hola desde la base de datos';
}

/*
export const traerHoteles = async (ingreso, salida) => {
    let client = await pool.connect();
    try {
        let r = await client.query("select h.*, array(select ha.id from habitacion ha where ha.hotel=h.id and ha.id not in (select habitacion from reserva where ingreso>=$1 and salida<=$2)) as habit from hotel h", [ingreso, salida])
        return r.rows;
    } catch (error) {
        return new Error("Algo salio mal :(");
    }
    finally {
        (await client).release()
    }
}*/