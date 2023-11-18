// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt('Digite a altura do retângulo'))
  let largura = Number(prompt('Digite a largura do retângulo'))
  let calculo = altura * largura
  console.log(calculo)

}


// EXERCÍCIO 02
function imprimeIdade() {
 let anoAtual = Number(prompt('Digite o ano atual'))
 const anoNascimento = Number(prompt('Digite o ano de seu nascimento'))
 let idade = anoAtual - anoNascimento
 console.log(idade)
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura*altura)
 console.log(imc)
 return imc
}



// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt( 'Digite seu nome')
  let idade = Number (prompt('Digite sua idade'))
  let email = prompt('Digite seu email')

  console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos, e o meu email é ' + email + '.')
 
}



// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt('Digite sua cor favorita')
  let cor2 = prompt('Digite sua segunda cor favorita')
  let cor3 = prompt('Digite sua terceira cor favorita')
  let coresLista = [cor1, cor2, cor3]
  console.log(coresLista)
}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let maiuscula = string.toUpperCase()
  return maiuscula

}



// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let calculo = custo / valorIngresso
  return calculo

}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let verificaCaracteres1 = string1.length
  let verificaCaracteres2 = string2.length
  let verificaCaracteres = verificaCaracteres1 === verificaCaracteres2
  return verificaCaracteres
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  let primeiroElemento = array[0]
  console.log(primeiroElemento)
  return primeiroElemento

}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  console.log(array[array.length - 1])
  
  return array[array.length - 1]

}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiro = array[array.length -1]
  let ultimo = array[0]
  array.pop()
  array.shift()
  array.unshift(primeiro)
  array.push(ultimo)
  console.log(array)
  return array
  
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let minuscula = string1.toLowerCase()
  let minuscula2 = string2.toLowerCase()
  let verificaIgualdade = minuscula === minuscula2
  console.log(verificaIgualdade)
  return verificaIgualdade

}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt('Digite o ano atual'))
  const anoNascimento = Number(prompt('Digite seu ano de nascimento'))
  const emissaoRGAno = Number(prompt('Digite o ano de emissão do RG'))
  let condicao1 = (anoAtual - anoNascimento <= 20 && anoAtual - emissaoRGAno >= 5)
  let condicao2 = (anoAtual - anoNascimento > 20 && anoAtual - anoNascimento <= 50 && anoAtual - emissaoRGAno >= 10)
  let condicao3 = (anoAtual - anoNascimento > 50 && anoAtual - emissaoRGAno > 15)
  const condicaoGeral = condicao1 || condicao2 || condicao3
  console.log(condicaoGeral)
}




// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const div4 = ano % 4 === 0
  const div100 = ano % 100 === 0
  const div400 = ano % 400 === 0
  const verifica1 = div4 && !div100 || div400
  return verifica1

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
    const maioridade = confirm('Tem mais de 18 anos?')
    const ensino = confirm('Tem ensino médio completo?')
    const horario = confirm('Tem disponibilidade no horário do curso?')

    const verificacao = maioridade && ensino && horario
    console.log(verificacao)
    return verificacao

}
