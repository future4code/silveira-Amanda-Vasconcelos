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
  // implemente sua lógica aqui
  const alturaRetangulo = Number(prompt(`Qual é a altura do triangulo?`));
  const larguraRetangulo = Number(prompt(`Qual é a largura do triangulo`));
  const areaRetangulo = (alturaRetangulo*larguraRetangulo);
  
  console.log(areaRetangulo);

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt(`Em qual ano nos estamos?`));
  const anoNascimento = Number(prompt(`Em qual ano voce nasceu?`));
  let idade = (anoAtual - anoNascimento);

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  IMC = peso / (altura*altura)
  return IMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsuario4 = prompt(`Escreva seu nome:`);
  const idadeUsuario4 = Number(prompt(`Qual é a sua idade?`));
  const emailUsuario4 = prompt(`Coloque aqui o seu email:`);

  //console.log(`Meu nome é ${nomeUsuario4}, tenho ${idadeUsuario4} anos, e o meu email é ${emailUsuario4}`);

  const frase4 = `Meu nome é ${nomeUsuario4}, tenho ${idadeUsuario4} anos, e o meu email é ${emailUsuario4}`
  console.log(frase4);
  //na resposta do exercício, a saída esperada tá igual a real. Mas o programa diz que tá errado. Tentei outra alternativa, e ainda aparece erro. 

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt(`Qual é a sua primeira cor favorita?`);
  const corFavorita2 = prompt(`Qual é a sua segunda cor favorita?`);
  const corFavorita3 = prompt(`Qual é a sua terceira cor favorita?`);

  const arrayCoresFavoritas = [corFavorita1, corFavorita2, corFavorita3];

  console.log(arrayCoresFavoritas);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const strintMaiuscula = string.toUpperCase();
  return strintMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeIngressos = custo / valorIngresso
  return quantidadeIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let verificaTamanho = (string1.length) === (string2.length)
  return verificaTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length - 1]

  array[0] = ultimoElemento
  array[array.length - 1] = primeiroElemento

  return array

  //lembrar de salvar valores em variaveis antes de fazer trocas;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  verificaString12 = (string1.toUpperCase()) === (string2.toUpperCase())
  return verificaString12

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual13 = Number(prompt(`Coloque o ano atual`));
  const anoNascimento13 = Number(prompt(`Em que ano voce nasceu?`));
  const emissaoRG = Number(prompt(`Data de emissao da habilitaçao:`));

  const idade = (anoAtual13 - anoNascimento13);
  const tempoRG = (anoAtual13 - emissaoRG);

  switch(idade){
    
  }


}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}