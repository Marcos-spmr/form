const axios = require('axios')

async function consultaCEP (logradouro) {
    const url = "https://viacep.com.br/ws/GO/Goiania/" + encodeURIComponent(logradouro) + "/json/"
    const ObjetoEndereco = await axios.get(url)
    return ObjetoEndereco.data
}

module.exports = consultaCEP