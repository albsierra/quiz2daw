
exports.autores = function(req, res) 
{
    var arrayAutores = ["Juan Jose Moliner Garcia","Alberto Sierra Olmos"];
    res.render('autores/autores', {arrayAutores: arrayAutores});
};