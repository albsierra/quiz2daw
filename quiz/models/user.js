
//Definición del modelo de Usuarios

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Users',
	{
		username: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "->Falta nombre de usuario"}}
		},
		password: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "->Falta Contraseña"}}
		}
	});
}