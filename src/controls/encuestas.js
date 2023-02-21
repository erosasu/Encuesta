const modelo = require('../models/encuesta');
var {createPool} = require('mysql');
const encuesta = require('../models/encuesta');
const env = require('dotenv')


const con = createPool({
    host: env.process.HOST,
    user: env.process.USERNAME,
    password: env.process.PASSWORD,
    database: 'dbencuesta',
    port: 3306
 })


module.exports ={
    registrarEncuesta:(req, res)=>{
        const respuestas = req.body
        respuestas.id = `${new Date().getTime()}`

        generomusical= respuestas.gen_musical.join(',')
        respuestas.gen_musical = generomusical
        
        actividadacom= respuestas.act_acompanado.join(',')
        respuestas.act_acompanado=actividadacom

        actsolo= respuestas.act_solo.join(',')
        respuestas.act_solo=actsolo

        

        generopelis= respuestas.gen_pelis.join(',')
        respuestas.gen_pelis=generopelis

        generovideo=respuestas.gen_vid_youtube.join(',')
        respuestas.gen_vid_youtube=generovideo

        lugares1= respuestas.lugares.join(',')
        respuestas.lugares=lugares1

        temas= respuestas.tema.join(',')
        respuestas.tema=temas

        var today = new Date();
        
        respuestas.datat= `${today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}`

        con.query(`INSERT INTO tblencuesta (id, nombre, correo, edad, artistas, gen_musical, gen_pelis, gen_vid_youtube, deportes, act_solo,
            act_acompanado, lugares, tema, nom_peliculas, nom_series, nom_libros, enunciado, vestimenta, datat, comida) VALUES 
            (2147483647, '${respuestas.nombre}', '${respuestas. correo}', ${respuestas.edad}, '${respuestas.artistas}', '${respuestas.gen_musical}', 
                '${respuestas.gen_pelis}', '${respuestas.gen_vid_youtube}', '${respuestas.deportes}', '${respuestas.act_solo}', '${respuestas.act_acompanado}', '${respuestas.lugares}', '${respuestas.tema}',
                 '${respuestas.nom_peliculas}', '${respuestas.nom_series}', '${respuestas.nom_libros}', '${respuestas.enunciado}', '${respuestas.vestimenta}', '${respuestas.datat}', '${respuestas.comida}' )`, (err, response) =>{

        if(err){
            console.log(err)
            res.render('confirmacion', {error:true, correo: respuestas.correo})
        }else{
            const {nombre, correo } = response;
            console.log(response)
            res.render('confirmacion', {nombre, correo});}
        })


        
    },
    formRegistro:(req, res)=>{
        res.render('registro');
    }  
} 