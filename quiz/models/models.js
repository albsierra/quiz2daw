/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var path = require('path');
//Cargar modelo ORM
var Sequelize = require('sequelize');
//Usar BBDD SQLite:
var sequelize = new Sequelize(null,null,null,
            {dialect: "sqlite", storage: "quiz.sqlite" }
);
//Importar la deifinicion de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname,"quiz"));

exports.Quiz = Quiz //exportar la definicion de la tabla quiz
//sequelize.sync()crea e inicializaba tabla de preguntas en BD
sequelize.sync().then(function(){
    // then(..)ejecuta el manejador una vez creada la tabla
    Quiz.count().then(function(count){
        if(count === 0){ //la tabla se inicializa solo si esta vacia
            Quiz.create({pregunta: 'Capital de Italia',
                         respuesta: 'Roma'});
            Quiz.create({pregunta: 'Capital de Portugal',
                         respuesta: 'Lisboa'})
                             .then(function(){console.log('Base de datos inicializada')});
        };
    });
});
//Importar definicion de la tabla commetn
var comment_path = path.join(__dirname, 'comment');
var Comment = sequelize.import(comment_path);
Comment.belongsTo(Quiz);
Quiz.hasMany(Comment);
exports.Quiz = Quiz //exportar la definicion de la tabla quiz
exports.Comment = Comment;