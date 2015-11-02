module.exports = function(sequelize, DataTypes) {
	return sequelize.define('User',
	{
		username: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "->Falta usuario"}}
		},
		password: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "->Falta contraseña"}}
		}
	});
}
