var models = require('../models/models.js');

// Autenticar con la base de datos de usuarios
exports.autenticar = function(login, pass, callback) {
	models.User.find({
		where : {
			username : login,
			password : pass
		}
	}).then(function(user) {
		if (user) {
			callback(null, user);
		} else {
			callback(new Error('Error al introducir los datos'));
		}
	}).catch(function(error) {
		next(error)
	});
};

// Autoload - factoriza el código si ruta incluye :userId
exports.load = function(req, res, next, userId) {
	models.User.find({
		where : {
			id : Number(userId)
		},
	}).then(function(user) {
		if (user) {
			req.user = user;
			next();
		} else {
			next(new Error('No existe userId=' + userId));
		}
	}).catch(function(error) {
		next(error);
	});
};

//Muestra los usuarios
exports.index = function(req, res) {
	models.User.findAll().then(function(users) {
		res.render('users/index.ejs', {
			users : users
		});
	}).catch(function(error) {
		next(error);
	})
};

//Elimina users

exports.destroy = function(req, res) {
	req.user.destroy().then(function() {
		res.redirect('/users');
	}).catch(function(error) {
		next(error)
	});
}; 