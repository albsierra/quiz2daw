var models = require('../models/models.js');
//Comprueba si el usuario esta registrado en users
// Si autenticacion falla o hay errores se ejecuta callback(error).

exports.autenticar = function(login, pass, callback){
	models.User.find({
            where: { username: login, password: pass }
			}).then(function(user) {
					if(user) {
					callback(null, user);
		} else {
			callback(new Error('No existe el usuario.'));
			}
			}
		).catch(function(error) { next(error);});
	};
	
	
