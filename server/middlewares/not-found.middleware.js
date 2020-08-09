
verificar_ruta  = ( req, res, next ) => {
    return res.status(400)
            .send({message: "Página no encontrada"});
};

module.exports = function( req, res, next ) {
    return res.status(400)
            .send({message: "Página no encontrada"})
}