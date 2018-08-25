var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var event = require('./models/evento');
var cors = require('cors');

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Rutas

app.get('/pruebas', (request, response)=>{
    response.status(200).send({mensaje:'Pruebas de servidor correctas'});
})

app.get('/getEventos', (request, response)=>{
    
    event.find({}).exec( (error, results)=>{
        if (error){
            response.status(500).send({mensaje:'Problemas al devolver datos'});
        }else{
            return response.status(200).send(
                results);
        }
    });

})

app.post('/addEventMarket', (request, response)=>{
    var myEvent = new event();
    var params = request.body;

    myEvent.codigo = params.codigo;
    myEvent.descripcion = params.descripcion;
    myEvent.latitud = params.latitud;
    myEvent.longitud = params.longitud;
    myEvent.isDelito = true;
    
    console.log(myEvent);

    myEvent.save( (error, userStored)=>{
        if(error){
            response.status(500).send({mensaje:'Problemas al registrar el marcador'});
        }else{
            if(!userStored){
                response.status(500).send({mensaje:'No se pudo guardar el marcador'});
            }else{
                response.status(200).send(
                    {
                        mensaje:'Registro de marcado exitoso!!!',
                        objeto: userStored
                    });
            }
        }

    });

});

module.exports = app;