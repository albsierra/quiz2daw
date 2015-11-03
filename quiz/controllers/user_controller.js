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

};
exports.load=function(req,res,next,userId){
    models.User.find({
        where: { id: Number(userId)}
    }).then(function(user){
            if(user){
                req.user=user;
                next();
            }else{next(new Error('No existe quizId='+userId))}
        }
    ).catch(function(error){next(error);});
};
exports.edit=function(req,res){
    var user=req.user;//autoload de instancia de quiz
    res.render('users/edit', {user : user});
};

exports.update=function(req,res){
    req.user.username = req.body.user.username;
    req.user.password = req.body.user.password;
    
    req.user
            .validate()
            .then(
            function(err){
                if(err){
                res.render('users/edit', {user: req.user, errors: err.errors});
            }else  {
                req.user
                        .save({fields:["username", "password"]})
                        .then(function(){res.redirect('/users/');});
            }
        }
    );
};