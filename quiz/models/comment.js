// Definicion del modelo de Comment con validacion

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Comment', {
		texto : {
			type : DataTypes.STRING,
			validate : {
				notEmpty : {
					msg : "-> Falta comentario"
				}
			}
		}

	});
}

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Comment', {
		texto : {
			type : DataTypes.STRING,
			validate : {
				notEmpty : {
					msg : "-> Falte Cmonetario"
				}
			}
		}
	});
}
