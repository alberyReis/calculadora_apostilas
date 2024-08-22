const enviar = document.querySelector('#enviar')

function formataPreco(valor) {
  let preco = valor.toString().split('').reverse().join('').replace('.', '')
  preco = preco.replace(/(\d{2})/, '$1,')
  preco = preco.replace(/(\d{3}(?!$))/g, '$1.')
  return preco.split('').reverse().join('')
}

function limparCampos() {
  document.querySelector('#qtdeFolhas').value = ''
  document.querySelector('#qtdeApostilas').value = ''
}

enviar.addEventListener('click', (event) => {
  event.preventDefault()

  let valorFolhas = 1
  let valorCor = 2
  let valorFrenteVerso = 2

  const qtdeFolhas = document.querySelector('#qtdeFolhas').value
  const corImpressao = document.querySelector('#corImpressao').value
  const frenteVerso = document.querySelector('#frenteVerso').value
  const qtdeApostilas = document.querySelector('#qtdeApostilas').value
  const display = document.querySelector('#display')

  if (corImpressao === 'colorido') {
    valorCor = 4
  }

  if (frenteVerso === 'frenteverso') {
    valorFrenteVerso = 4
  }

  if (valorFolhas === '' || qtdeApostilas === '') {
    alert('Por favor preencha todos os campos!')
    limparCampos()
    display.innerHTML = 'R$00,00'
    return
  }

  const valorApostila = (valorFolhas * parseFloat(qtdeFolhas)) + valorCor + valorFrenteVerso

  const encadernacaoCalculada = (valorApostila * parseFloat(qtdeApostilas))

  display.innerHTML = `R$${formataPreco(encadernacaoCalculada * 100)}`

  limparCampos()
})

