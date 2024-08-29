const enviar = document.querySelector('#enviar')

function limparCampos() {
  document.querySelector('#qtdeFolhas').value = ''
  document.querySelector('#qtdeApostilas').value = ''
}

enviar.addEventListener('click', (event) => {
  event.preventDefault()

  let valorFolhas = 0.69
  let valorEspiral = 1.78

  const qtdeFolhas = document.querySelector('#qtdeFolhas').value
  const espiral = document.querySelector('#espiral').value
  const corImpressao = document.querySelector('#corImpressao').value
  const frenteVerso = document.querySelector('#frenteVerso').value
  const qtdeApostilas = document.querySelector('#qtdeApostilas').value
  const displayPreco = document.querySelector('#displayPreco')
  const displayLucro = document.querySelector('#displayLucro')

  if (corImpressao === 'colorido') {
    valorFolhas = 0.75
  }

  if (frenteVerso === 'frenteverso') {
    valorFolhas *= 2
  }

  if (espiral === 'espiral9mm') {
    valorEspiral = 1.81
  } else if (espiral === 'espiral12mm') {
    valorEspiral = 1.82
  } else if (espiral === 'espiral14mm') {
    valorEspiral = 2.02
  } else if (espiral === 'espiral17mm') {
    valorEspiral = 2.11
  } else if (espiral === 'espiral25mm') {
    valorEspiral = 2.74
  } else if (espiral === 'espiral29mm') {
    valorEspiral = 3.08
  } else if (espiral === 'espiral33mm') {
    valorEspiral = 3.75
  } else if (espiral === 'espiral40mm') {
    valorEspiral = 4.88
  }

  if (valorFolhas === '' || qtdeApostilas === '') {
    alert('Por favor preencha todos os campos!')
    limparCampos()
    display.innerHTML = 'R$00,00'
    return
  }

  const valorApostila = (valorFolhas * parseFloat(qtdeFolhas)) + valorEspiral
  const encadernacaoCalculada = (valorApostila * parseFloat(qtdeApostilas))
  const lucro = encadernacaoCalculada.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  const preco = (encadernacaoCalculada * 2).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  displayPreco.innerHTML = `R$${preco}`
  displayLucro.innerHTML = `R$${lucro}`

  limparCampos()
})

