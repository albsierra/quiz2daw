var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var quizController = require('../controllers/autor_controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});
router.get('/autores', function(req, res, next) {
  res.render('autores/autores');
});


router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/autores/autores', quizController.list);

module.exports = router;
