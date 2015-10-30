
var path = require('path');

// Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite:
var sequelize = new Sequelize(null, null, null,
			{dialect: "sqlite", storage: "quiz.sqlite"}
		);

// Importar la definici�n de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));
var User = sequelize.import(path.join(__dirname, 'user'));

// sequelize.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync().then(function() {
	// then(..) ejecuta el manejador una vez creada la tabla
	Quiz.count().then(function(count) {
		if(count === 0) { // la tabla se inicializa solo si est� vac�a
		Quiz.create({ pregunta: 'Capital de Italia' ,
					  respuesta: 'Roma'
		});
		Quiz.create({ pregunta: 'Capital de Portugal' ,
					  respuesta: 'Lisboa'
		})
		.then(function(){console.log('Base de datos inicializada')});
		};
	});
	
	// then(..) ejecuta el manejador una vez creada la tabla
	Users.count().then(function(count) {
		if(count === 0) { // la tabla se inicializa solo si est� vac�a
		Users.create({ username: 'admin' ,
					  password: '1234'
		});
		Users.create({ username: 'pepe' ,
					  password: '4567'
		})
		.then(function(){console.log('Usuarios inicializados')});
		};
	});
	
	});

var comment_path = path.join(__dirname, 'comment');
var Comment = sequelize.import(comment_path);

Comment.belongsTo(Quiz);
Quiz.hasMany(Comment);

exports.Quiz = Quiz; // exportar definici�n de tabla Quiz
exports.Comment = Comment;
exports.User = User;