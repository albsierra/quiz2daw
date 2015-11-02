module.exports = function(sequelize, DataTypes) {
	return sequelize.define('User',
	{
		usuario: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "->Falta nombre de usuario"}}
		},
		password: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "->Falta password"}}
		}
	});
}