//Definicion del modelo tabla usuario
module.exports=function(sequelize, DataTypes){
    return sequelize.define('User',
        {usuario: DataTypes.STRING,
        contrasena: DataTypes.STRING,
        });
}