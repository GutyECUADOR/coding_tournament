var mongoose = require('mongoose');
var schema = mongoose.Schema;
var eventModel = schema({
    codigo : String,
    descripcion: String,
    latitud: Number,
    longitud: Number,
    isDelito : Boolean
})

module.exports = mongoose.model('event',eventModel);
