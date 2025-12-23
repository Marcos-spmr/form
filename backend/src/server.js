const porta = 3003
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.listen(porta, ()=>console.log("Rodando"))

app.use(express.static(path.join(__dirname, '../../frontend')))

app.get('/', (req, res, err) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'index.html'))
})

app.post('/', (req, res) => {
    console.log(req.body)
})