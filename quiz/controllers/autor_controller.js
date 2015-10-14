//generar lista de autores

exports.answer = function(req, res) {
    var arrayLista=["Lenin Naranjo Zapata"];
    res.render("autores/autores",{Lista:arrayLista});
};
