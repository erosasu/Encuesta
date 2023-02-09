const dynamoose = require("dynamoose");

const encuesta = new dynamoose.Schema({ 
    "id": String,
    "edad": String,
    "nombre":String,
    "email":String,
    "genero":String,
    "artistas":String,
    
}, {
    "saveUnknown": true,
    "timestamps": true
});

module.exports = dynamoose.model('Registros_encuestas', encuesta)