exports.estadisticas= function (req,res)
{
  res.render('estadisticas/estadisticas',{aciertos: req.app.locals.contAciertos,fallos: req.app.locals.contFallos});
}
   
  
    