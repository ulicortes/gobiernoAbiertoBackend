export const RegexMiddleware = (req, res, next) => {
    const { usuario, clave } = req.body;

    let regex_user = /^[a-zA-Z]{3,30}$/;
    let regex_pass = /^[a-zA-Z0-9!@#$%^&*]{6,50}$/;

    if(!regex_user.test(usuario)) return res.status(400).send('Usuario invalido');
    if(!regex_pass.test(clave)) return res.status(400).send('Clave invalida');
    
    next();
}

export default RegexMiddleware;