/*var users = {admin: {id:1, username:"admin", password:"1234"},
            pepe: {id:2, username:"pepe", password:"4321"}
            };
exports.autenticar = function(login,password,callback){
    if(users[login]){
        if(password===users[login].password){
            callback(null,users[login]);
        } else{ callback(new Error('Contraseña incorrecta.')); }
    } else{ callback(new Error('No existe el usuario')); }
};*/
var models = require('../models/models.js');

exports.autenticar = function(login,pass,callback) {
	models.User.find({
            where:{usuario: login, password: pass}
        }).then(
		function(user) {
			if(user) {
                            callback(null,user);
			} else { callback(new Error('No existe usuario=' + login)); }
		}
	).catch(function(error) { callback(error);});
};