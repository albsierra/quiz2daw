var models = require('../models/models.js');
//GET /quizes/:quizId/comments/new
exports.new = function(req,res){
    res.render('comments/new.ejs', {quizid: req.params.quizId});
};

//POST /quizes/:quizId/comments
exports.create = function(req, res){
    var comment = models.Comment.build(
            { texto: req.body.comment.texto,
            QuizId: req.params.quizId
        });
        
        comment
                .valdiate()
                .then(
                function(err){
                    if(err){
                        res.render('comments/new.ejs',
                            {comment: comment, quizid: req.params.quizId, error: err.errors});
                    }else {
                        comment//save:guarda en DB campo texto de comment
                                .save()
                                .then(function(){ res.redirect('/quizes/'+req.params.quizId)})
                    }//res.resdirect : redireccion http a lista de preguntas
                }
            ).catch(function(error){next(error)});
};