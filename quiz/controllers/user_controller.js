/*var users = {admin: {id:1, username:"admin", password:"1234"},
             pepe: {id:2, username:"pepe", password:"5678"}
            };*/
var models = require ('../models/models.js');

//Comprueba si el usuario esta registrado en users
//si autenticacion falla o hay errores se ejecuta callback(eror).
exports.autenticar = function(login, pass, callback){
    models.User.find({
        where: { username: login, password: pass}  
    }).then(function(user){
            if(user){
                callback(null, user);
            }else{callback(new Error('No existe el usuario.'));}
        }
    ).catch(function(error){callback(error);});
  /*  if(users[login]){
        if(password === users[login].password){
            
        }
        else{callback(new Error('Password erroneo.'));}
    } else {callback(new Error('No existe el usuario.'));}*/
};