var models = require ('../models/models.js');
// GET /quizes/question
exports.load=function(req,res,next,quizId){
    models.Quiz.findById(quizId).then(
        function(quiz){
            if(quiz){
                req.quiz=quiz;
                next();
            }else{next(new Error('No existe quizId='+quizId));}
        }
    ).catch(function(error){next(error);});
};
exports.show = function(req, res) {   
        res.render('quizes/show', {quiz: req.quiz});
    };                                                                                                                                                              

// GET /quizes/answer
exports.answer = function(req, res) {
    var resultado= 'Inconrrecto';
    if(req.query.respuesta === req.quiz.respuesta){   
        resultado='Correcto';
    }
    res.render('quizes/answer', {quiz:req.quiz,respuesta: resultado});
    
};
//GET/quizes
exports.index=function(req, res){
    models.Quiz.findAll().then(function(quizes){
        res.render('quizes/index.ejs',{quizes:quizes});
    })
}

//Autoload-factoriza el codigo si la ruta incluye :quizId

//anhadir la accion new a la ruta get/quizes/new
exports.new = function(req,res){
    var quiz=models.Quiz.build(
            {pregunta: "Pregunta", respuesta: "Respuesta"}
    );
    res.render('quizes/new', {quiz: quiz});
};
//POST /quizes/create
exports.create=function(req,res){
    var quiz=models.Quiz.build(req.body.quiz);
    //guarda en DB los campos pregunta y respuesta de quiz
    quiz.save({fields: ["pregunta", "respuesta"]}).then(function(){
        res.redirect('/quizes');
    })  //Redireccion HTTP (URL relativo) lista de preguntas
};
