var path = require('path');

//Cargar Modelo ORM
var Sequelize = require('sequelize');

//Usar BBDD SQLite
var sequelize = new Sequelize(null,null,null,
                {dialect: "sqlite", storage: "quiz.sqlite"}
                );
//Importar la definicion de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));
var User = sequelize.import(path.join(__dirname, 'user'))/*prueba user*/
exports.Quiz = Quiz //Exportar definicion de tabla Quiz
exports.User = User /*prueba tabla User*/
//sequelize.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync().then(function(){
    //then(..) ejecuta el manejador una vez creada la tabla
    Quiz.count().then(function(count){
        if(count ===0){//la tabla se inicializa solo si esta vacia
        Quiz.create({pregunta: 'Capital de Italia',
                     respuesta: 'Roma'
                 });
        Quiz.create({pregunta: 'Capital de Portugal',
                     respuesta: 'Lisboa'
                 }).then(function(){console.log('Base de datos inicializada')});               
        };
    });
});
sequelize.sync().then(function(){/*crear la tabla User si no está ya creada*/
    User.count().then(function(count){
        if(count===0){
            User.create({username: 'admin',
                password: '1234'
            });
            User.create({username: 'pepe',
                password: '5678'
            }).then(function(){console.log('Tabla usuarios inicializada oSo')});
        };
    });
});
//Importar definicion de la tabla Comment
var comment_path = path.join(__dirname, 'comment');
var Comment = sequelize.import(comment_path);
Comment.belongsTo(Quiz);
Quiz.hasMany(Comment);

exports.Quiz = Quiz;//exportar tabla quiz
exports.Comment = Comment;