// GET /quizes/question
exports.question = function(req, res) {
    res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

// GET /quizes/answer
exports.answer = function(req, res) {
        req.app.locals.contErrores = (req.app.locals.contErrores || 0);  
        req.app.locals.contAciertos = (req.app.locals.contAciertos || 0);
    if(req.query.respuesta === 'Roma'){
        req.app.locals.contAciertos += 1;  
        res.render('quizes/answer', {respuesta: 'Correcto'});
        
        
    } else {
        req.app.locals.contErrores += 1;
        res.render('quizes/answer', {respuesta: 'Incorrecto'});
        
    }
};

