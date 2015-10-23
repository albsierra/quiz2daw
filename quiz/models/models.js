var path = require('path');

//cargar modelo orm
var Sequelize = require ('sequelize');

//usar bbdd sqlite
var sequelize = new Sequelize(null,null,null,
	{dialect: "sqlite" , storage: "quiz.sqlite" }
	);

var Quiz = sequelize.import(path.join(__dirname,'quiz'));

var comment_path = path.join(__dirname, 'comment');
var Comment = sequelize.import(comment_path);

Comment.belongsTo(Quiz);
Quiz.hasMany(Comment);

exports.Quiz = Quiz;
exports.Comment = Comment;

sequelize.sync().then(function(){
	
	Quiz.count().then(function(count){
		
		if(count === 0){
			Quiz.create({ pregunta: 'Capital de Italia',
						  respuesta: 'Roma'
						});
			Quiz.create({pregunta: 'Capital de Portugal',
						  respuesta: 'Lisboa'
						 })
			.then(function(){console.log('Base de datos inicializada')});
		};
	});
});