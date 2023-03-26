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
  const altura = Number(prompt('Digite a largura do retângulo'))
  const largura = Number(prompt('Digite a largura do retângulo'))
  var area = altura*largura 
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Em qual ano estamos?'))
  const anoDeNascimento = Number(prompt('Qual é seu ano de nascimento?'))
  const idade = anoAtual - anoDeNascimento 
  console.log(idade)
}

// EXERCÍCIO 03
const peso = Number(prompt("Qual é seu peso?"))
const altura = Number(prompt("Qual é a sua altura?"))
function calculaIMC(peso, altura) {
 const imc = peso / (altura*altura)
 return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual é o seu nome?")
  const idade = Number(prompt("Qual é a sua idade?"))
  const email = prompt("Qual é o seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Qual é a sua primeira cor favorita?")
  const cor2 = prompt("Qual é a sua segunda cor favorita?")
  const cor3 = prompt("Qual é a sua terceira cor favorita?")
  const lista = [cor1, cor2, cor3]
  console.log(lista)
}

// EXERCÍCIO 06
const string = prompt("Digite algo aqui:")
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
const custo = prompt("Qual é o custo do espetáculo?")
const valorIngresso = prompt("Qual é o valor do ingresso?")
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
const string1 = prompt("Digite algo aqui:")
const string2 = prompt("Digite mais algo aqui:")
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
var frase = prompt("Digite algo:")
const array = frase.split('')
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
var frase = prompt("Digite algo:")
const array1 = frase.split('')
function retornaUltimoElemento(array1) {
  return array1[array1.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const n1array = array[array.length-1] 
  const n2array = array[0]
  array.pop()
  array.shift()
  array.unshift(n1array)
  array.push(n2array)
  return array
}

// EXERCÍCIO 12
const string12 = prompt("Digite algo:").toLowerCase()
const string22 = prompt("Digite algo:").toLowerCase()
function checaIgualdadeDesconsiderandoCase(string12, string22) {
  const comparativo = string12.toLowerCase() === string22.toLowerCase()
  return comparativo
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}