const modelo = require('../models/encuesta');

module.exports ={
    registrarEncuesta:(req, res)=>{
        const respuestas = req.body
        respuestas.id = `${new Date().getTime()}`
        modelo.create(respuestas).then(response =>{
            const {nombre, correo } = response;
            console.log(response)
            res.render('confirmacion', {nombre, correo});
        }).catch(err=>{
            console.log(err)
            res.render('confirmacion', {error:true, correo: respuestas.correo})
        })
        
    },
    formRegistro:(req, res)=>{
        res.render('registro');
    }  
} 