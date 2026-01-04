const mongoose = require('mongoose')

const consultaSchema = new mongoose.Schema({
    uf: String,
    cidade: String,
    logradouro: String,

    resultados: Array,
    dataConsulta: { type: Date, default: Date.now }
})

module.exports = mongoose.model('consulta', consultaSchema);