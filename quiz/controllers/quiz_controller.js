var models = require('../models/models.js');

// Autoload - factoriza el código si ruta incluye :quizId
exports.load = function(req, res, next, quizId) {
	models.Quiz.findById(quizId).then(
			function(quiz) {
				if(quiz) {
					req.quiz = quiz;
					next();
				} else { next(new Error('No existe quizId=' + quizId)); }
			}
	).catch(function(error) { next(error);});
};

// GET /quizes
exports.index = function(req, res) {
	models.Quiz.findAll().then(function(quizes) {
    res.render('quizes/index', {quizes: quizes});
});
}

// GET /quizes/:quizId
exports.show = function(req, res) {
    res.render('quizes/show', {quiz: req.quiz});
}

// GET /quizes/answer
exports.answer = function(req, res) {
	var resultado = 'Incorrecto';
	if(req.query.respuesta === req.quiz.respuesta){
		resultado = 'Correcto';
	}
	res.render('quizes/answer', {respuesta: resultado, quiz: req.quiz});
};

// GET /quizes/new
exports.new = function(req, res) {
	var quiz = models.Quiz.build( //crea objeto quiz
	{pregunta: "Pregunta", respuesta: "Respuesta"}
	);
    res.render('quizes/new', {quiz: quiz});
};

// POST /quizes/create
exports.create = function(req, res) {
	var quiz = models.Quiz.build( req.body.quiz );
	
	//guarda en DB los campos pregunta y respuesta de quiz
	quiz.save({fields: ["pregunta", "respuesta"]}).then(function(){
			res.redirect('/quizes');
	})	//Redireccion HTTP (URL relativo) lista de preguntas
};