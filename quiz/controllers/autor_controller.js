//generar lista de autores

exports.list = function(req, res) {
    var arrayLista=["Lenin Naranjo Zapata"];
    res.render("autores/autores",{lista:arrayLista});
};
