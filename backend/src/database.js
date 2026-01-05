const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Conectado ao MongoDB")    
    } catch (error) {
        console.log("Deu erro ao conectar com o MongoDB", error)
    }
}

const consultaSchema = new mongoose.Schema({
    uf: String,
    cidade: String,
    logradouro: String,

    resultados: Array,
    dataConsulta: { type: Date, default: Date.now }
})

const consulta = mongoose.model('consulta', consultaSchema);

module.exports = { 
    consulta, 
    connectDB 
};