const database = require('./database.js')
const api = require('./api.js')
const porta = 3003
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const { validaLogradouro, validaDados } = require('./utils.js')

database.connectDB();

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());

app.listen(porta, ()=>console.log("Rodando"))

app.use(express.static(path.join(__dirname, '../../frontend')))

app.get('/', (req, res, err) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'index.html'))
})

app.post('/api/consultar-endereco', async (req, res, err) => {
    const logradouro = req.body.logradouro
    
    if (!validaLogradouro(logradouro)) {
            return res.status(400).send("Erro 400: Logradouro deve ter pelo menos 3 caracteres.");
        }
    
    const endereco = await api(logradouro)
    try {
            const objetoConsulta = {
                uf: 'GO',
                cidade: 'Goiânia',
                logradouro: req.body.logradouro,
                resultados: endereco
            }
            await database.consulta.create(objetoConsulta)
            console.log("Salvo no banco")
            
             res.json(endereco)
            
        } catch (error) {
            res.json({error : error})
        }
})

//se der um erro na validação tem q dar res
app.post('/enviar', async(req, res) => {
    console.log(req.body)
    const body = req.body
    const resultado = validaDados(body)

    resultado.valido ? res.status(200).json({mensagem : "Dados válidos"}) : res.status(400).json({mensagem: "Dados inválidos", detalhes: resultado.erros})
})