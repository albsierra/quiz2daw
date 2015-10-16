
exports.estadistica=function(req,res){
    res.render('estadistica',{Correcto: req.app.locals.contAciertos, Error: req.app.locals.contFallos });
};