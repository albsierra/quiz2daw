var path = require('path');

//cargar modelo orm
var Sequelize = require ('sequelize');

//usar bbdd sqlite
var sequelize = new Sequelize(null,null,null,
	{dialect: "sqlite" , sortage: "quiz.sqlite" }
	);

var Quiz = sequelize.import(path.join(__dirname,'quiz'));

exports.Quiz = Quiz;

sequelize.sync().then(function(){
	
	Quiz.count().then(function(count){
		
		if(count === 0){
			Quiz.create({ pregunta: 'Capital de Italia',
						  respuesta: 'Roma'
						})
			.then(function(){console.log('Base de datos inicializada')});
		};
	});
});