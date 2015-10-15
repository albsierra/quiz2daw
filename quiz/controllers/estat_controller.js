// GET /estadisticas


exports.estat = function(req, res) {
        res.render('estadisticas/estadisticas', {contAciertos: req.app.locals.contAciertos, contErrores: req.app.locals.contErrores});    
}

