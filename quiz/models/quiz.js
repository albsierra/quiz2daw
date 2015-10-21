/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function(sequelize, DataTypes){
    return sequelize.define(
            'Quiz',
    {pregunta: {
            type: DataTypes.STRING,
            validate:{notEmpty: {msg:"-> Falta Pregunta"}}
    },
     respuesta:{ 
         type: DataTypes.STRING,
         validate:{notEmpty:{msg:"-> Falta Respuesta"}}
      }
         
        
    }
    
  );
}

