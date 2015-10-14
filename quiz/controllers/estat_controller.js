// GET /estadisticas


exports.estat = function(req, res) {
    
    if(req.query.respuesta === 'Roma'){
        req.app.locals.contAciertos = (app.locals.contAciertos || 0);
        req.app.local.contAciertos += 1;
        next();   
        res.render('estadisticas/estadisticas', {contAciertos: contAciertos});
    } else {
        req.app.locals.contErrores = (app.locals.contErrores || 0);
        req.app.local.contErrores += 1;
        next();   
        res.render('estadisticas/estadisticas', {contErrores: contErrores}); 
};}

