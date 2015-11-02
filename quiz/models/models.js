var path = require('path');

// Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite:
var sequelize = new Sequelize(null, null, null,
			{dialect: "sqlite", storage: "quiz.sqlite"}
		);

// Importar la definición de la tabla Quiz en quiz.js
var quiz_path = path.join(__dirname,'quiz');
var Quiz = sequelize.import(quiz_path);

var user_path = path.join(__dirname,'user');
var User = sequelize.import(user_path);

var comment_path = path.join(__dirname,'comment');
var Comment = sequelize.import(comment_path);

Comment.belongsTo(Quiz);
Quiz.hasMany(Comment);

exports.Quiz = Quiz; // exportar definición de tabla Quiz
exports.Comment = Comment;
exports.User = User;

// sequelize.sync() crea e inicializa tabla de preguntas y usuarios en DB
sequelize.sync().then(function() {
	// then(..) ejecuta el manejador una vez creada la tabla
	Quiz.count().then(function(count) {
		if(count === 0) { // la tabla se inicializa solo si está vacía
		Quiz.create({ pregunta: 'Capital de Italia' ,
					  respuesta: 'Roma'
		});
		Quiz.create({ pregunta: 'Capital de Portugal' ,
					  respuesta: 'Lisboa'
		})
		.then(function(){console.log('Preguntas cargadas')});
		};
	});
            User.count().then(function(count) {
            if(count === 0) { // la tabla se inicializa solo si está vacía
            User.create({ usuario: 'admin' ,
                                      password: '1234'
            });
            User.create({ usuario: 'pepe' ,
                                      password: '4321'
            })
            .then(function(){console.log('Usuarios cargados')});
            };
	});

});