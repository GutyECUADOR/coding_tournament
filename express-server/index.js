'use strict'

var mongoose = require('mongoose');
var express = require('./server');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/testDB')
    .then( () => {
        console.log('Conexion establecida');
        //Instancia del servidor
        express.listen(port, ()=>{
            console.log('Servidor listo en puerto:' + port);
        });

    }).catch((err)=>{
        console.error('Sin conexion');
})
