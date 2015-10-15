var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller')
var autorController = require('../controllers/autor_controller')
var estatController = require('../controllers/estat_controller')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/autores', autorController.list); // Ruta del listado de autores
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/estadisticas', estatController.estat);
module.exports = router;
