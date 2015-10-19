//
exports.list=function(req,res){
    var arrayLista=["Osmar Villca Choque"];
    res.render("autores/autores", {lista:arrayLista});
};