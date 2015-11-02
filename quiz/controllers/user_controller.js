var models = require('../models/models.js');

exports.autenticar = function(login, pass, callback){
	  models.User.find({ 
				where: { username : login , password : pass}
				
			}).then(function(user){
				if(user){
					callback(null, user);
				} else {callback(new Error('No existe Usuario' ));}
			}
	).catch(function(error) {next(error);});
	
};	
	
	/*
	if(users[login]){
		if(password === users[login].password){
			callback(null, users[login]);
		}
		else { callback(new Error('Password erroneo.')); }
	} else { callback(new Error('No existe el usuario.')); }
	*/
