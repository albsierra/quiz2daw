
var models = require('../models/models.js');
// GET /quizes/question
exports.show = function(req, res) {
    models.Quiz.findById(req.params.quizId).then(function(quiz){
    res.render('quizes/show', {quiz: req.quiz});
})
};

// GET /quizes/answer
exports.answer = function(req, res) {
    var resultado= 'Incorrecto';
        if(req.query.respuesta === req.quiz.respuesta){
            resultado='Correcto';
    } else {
        res.render('quizes/answer', {quiz:req.quiz, respuesta: resultado});
    }
    
};

// GET/quizes
exports.index=function(req, res){
    models.Quiz.findAll().then(function(quizes){
        res.render('quizes/index.ejs',{quizes:quizes});
    })
};

//Autoload - factoriza el codigo si ruta incluye :quizId

exports.load=function(req, res, next, quizId){
    models.Quiz.findById(quizId).then(
            function(quiz){
              if(quiz){  req.quiz=quiz;
                next();
            }else{next(new Error('Noexiste quizId='+quizId));}
        }
                    ).catch(function(error){next(error);});
};

