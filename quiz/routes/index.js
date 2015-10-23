var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller')
var autorController=require('../controllers/autor_controller')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});
//Autoload de comandos con :quizId
router.param('quizId', quizController.load);//Autoload :quizId
router.get('/autores', autorController.list);//ruta de listado de autores

router.get('/quizes',                       quizController.index);
router.get('/quizes/:quizId(\\d+)',         quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',  quizController.answer);
router.get('/quizes/new',                   quizController.new);
router.post('/quizes/create',               quizController.create);
router.get('/quizes/:quizId(\\d+)/edit',    quizController.edit);
router.put('quizes/:quizId(\\d+)',          quizController.update);
router.delete('/quizes/:quizId(\\d+)',      quizController.destroy);

module.exports = router;
