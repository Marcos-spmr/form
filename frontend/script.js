const formulario = document.querySelector('form')
const inputTelefone = document.getElementById('telefone')
const inputLogradouro = document.getElementById('logradouro')

inputTelefone.addEventListener('keyup', e => {
  let valor = e.target.value

  valor = valor.replace(/\D/g, '')

  valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2')
  valor = valor.replace(/(\d{5})(\d)/, '$1-$2')

  e.target.value = valor
})

formulario.addEventListener('submit', e => {
  const nome = document.getElementById('nome').value
  const email = document.getElementById('email').value
  const telefone = document.getElementById('telefone').value
  const logradouro = document.getElementById('logradouro').value

  if (!nome.trim() || !email.trim() || !telefone.trim() || !logradouro.trim()) {
    e.preventDefault()

    alert('Por favor, preencha todos os campos obrigatórios antes de enviar!')
  }
})

inputLogradouro.addEventListener('blur', async () => {
  const logradouro = document.getElementById('logradouro')
  const logradouroValor = logradouro.value

  try {
    const resultado = await axios.post('/api/consultar-endereco', { logradouro: logradouroValor })
    const resposta = resultado.data
    console.log(resposta)
    const campoCEP = document.querySelector('#CEP')
    const campoBairro = document.querySelector('#bairro')

    const selectCEP = document.createElement('select')
    selectCEP.id = 'CEP'
    selectCEP.className = campoCEP.className

    const optionDefault = document.createElement('option')
      optionDefault.text = "Selecione o CEP correto..."
      optionDefault.value = ""
      selectCEP.add(optionDefault)
    
    resposta.forEach(item => {
        const option = document.createElement('option')
        option.value = item.cep
        option.text = `${item.cep} - ${item.bairro} (${item.logradouro})`
        option.dataset.bairro = item.bairro
        option.dataset.logradouro = item.logradouro
        
        selectCEP.add(option)
      })

    selectCEP.addEventListener('change', (e) => {
        const optionSelecionada = e.target.selectedOptions[0]
        if (optionSelecionada.value) {
           campoBairro.value = optionSelecionada.dataset.bairro
           logradouro.value = optionSelecionada.dataset.logradouro
        }
      })
      campoCEP.parentNode.replaceChild(selectCEP, campoCEP)
      
      campoBairro.value = ""
    //campoBairroArray.value = primeiraResposta.bairro
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data) 
    } else {
      console.error('Erro desconhecido:', error)
    }
  }
})
