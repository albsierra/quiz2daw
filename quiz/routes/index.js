var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller')
var autoresController = require('../controllers/autores_controller')
var estadisticasController = require('../controllers/estadisticas_controller')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});


//router.get('/autores', function(req, res, next) {
//res.render ('autores/autores');
//});


router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/autores', autoresController.autores);
router.get('/estadisticas',estadisticasController.estadisticas);

module.exports = router;
