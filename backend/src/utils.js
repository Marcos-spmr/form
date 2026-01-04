function validaNome(nome){
    const regexNomeCompleto = /^[\p{L}]+(?:\s+[\p{L}]+)*$/u

    const nomeLimpo = nome.trim()

    if (nomeLimpo === "" || nomeLimpo === null || nomeLimpo === undefined) {
        return false
    }

    return regexNomeCompleto.test(nomeLimpo)
}

function validaTelefone(telefone){
    const telRegex = /^(\(?\d{2}\)?\s?)?(\d{4,5}\-\d{4})$/
    const telefoneLimpo = telefone.trim()

    if(telefoneLimpo === "" || telefoneLimpo === null || telefoneLimpo === undefined){
        return false
    }

    return telRegex.test(telefoneLimpo)
}


function validaEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const emailLimpo = email.trim()

      if(emailLimpo === "" || emailLimpo === null || emailLimpo === undefined){
        return false
    }

    return emailRegex.test(emailLimpo)    
}

function validaLogradouro(logradouro){
    const logradouroLimpo = logradouro.trim()
    if (logradouroLimpo.length < 3) {
        return false
    } else {
        return true
    }
}

function validaDados(body){
    let erros = {}

    if(!validaNome(body.nome)){
        erros.nome = "Nome incorreto"
    }

    if(!validaEmail(body.email)){
        erros.email = "Email incorreto"
    }

    if(!validaTelefone(body.telefone)){
       erros.telefone = "Telefone incorreto"
    }

    return {
        valido : Object.keys(erros).length === 0,
        erros : erros
    }
}
module.exports = {validaLogradouro, validaDados}


