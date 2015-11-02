var models = require('../models/models.js');
module.exports = function(sequelize, DataTypes){
	return sequelize.define('User', 
			{ username: {
				type: DataTypes.STRING,
				validate: { notEmpty: {msg: "No existe el usuario."}}
			},
			password: {
				type: DataTypes.STRING,
				validate: { notEmpty: {msg: "Password erroneo."}}
			}
		});
	
}