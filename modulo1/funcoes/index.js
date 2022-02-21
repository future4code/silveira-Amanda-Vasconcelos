/*
PRIMEIRA QUESTAO
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

A. Resposta: 10 e 50
B. Resposta: Se o console.log fosse retirado, nada seria impresso no console pois foi ele quem chamou a funçao. 

SEGUNDA QUESTAO: 
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

A. Essa funçao pega a coordenada que é a frase capturada pelo usuário através do prompt e nela aplica os métodos .toLowerCase() e .includes() retornando a frase alterada. 
B. 
Eu gosto de cenoura - eu gosto de cenoura true
CENOURA é bom pra vista - cenoura é bom pra vista true
Cenouras crescem na terra - cenouras crescem na terra true

DÚVIDA: no teste, nao foi impressa a string no console. Mas ela foi executada pelo método .toLowerCase pois o includes retornou verdadeiro no segundo e no terceiro item. 
Por que?
Além disso, ao retirar o .includes, a srting é impressa no console. 
*/

//PRIMEIRA QUESTAO

function informacaoPessoalFixa() {
    console.log(`Eu sou Amanda, tenho 33 anos, moro em Icapuí e sou estudante.`);
}

informacaoPessoalFixa();


function informacoesPessoais(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}

const nomeUsuario = prompt("Diga seu nome:");
const idadeUsuario = Number(prompt("Diga sua idade"));
const cidadeUsuario = prompt("Diga onde voce mora:");
const profissaoUsuario = prompt("Qual é a sua profissao?");

informacoesPessoais(nomeUsuario, idadeUsuario, cidadeUsuario, profissaoUsuario);


//SEGUNDA QUESTAO


//A.
function somar(x,y) {
    const soma = x + y;
    return soma
}

const resultado = somar(2,4);
console.log(`O resultado da soma é ${resultado}`); //ou escrever apenas: console.log(`O resultado da soma é ${somar(2,4)}`);

//B.
function testeBoolean(x,y) {
    const teste = x >= y
    return teste
}
console.log(`O primeiro número é maior do que o segundo? ${testeBoolean(4,8)}`);


//C. 
function booleanPar(x){
    const verificaPar = x % 2 === 0
    return verificaPar
}

console.log(booleanPar(40));


//D.
function alterandoMensagem(mensagem){
    const mensagemMaiuscula = mensagem.toUpperCase();
    const tamanhoDaMensagem = mensagemMaiuscula.length; 
    
    console.log(mensagemMaiuscula, tamanhoDaMensagem);
}

alterandoMensagem(`Eu sou a onda, faz de mim o mar.`);


//TERCEIRA QUESTAO
function somando(x,y){
    return x + y;
}

function subtraindo(x,y){
   return x - y;
}

function multiplicando(x,y){
    return x * y;
}

function dividindo(x,y){
   return x / y;
}

const primeiroNumero = Number(prompt(`Escolha um número:`));
const segundoNumero = Number(prompt(`Escolha outro número:`));

const somaDoUsuario = somando(primeiroNumero, segundoNumero);
const subtracaoDoUsuario = subtraindo(primeiroNumero, segundoNumero);
const multiplicacaoDoUsuario = multiplicando(primeiroNumero, segundoNumero);
const divisaoDoUsuario = dividindo(primeiroNumero, segundoNumero);

console.log(`Números inseridos: ${primeiroNumero} e ${segundoNumero}`);
console.log(`Soma: ${somaDoUsuario}`);
console.log(`Subtraçao: ${subtracaoDoUsuario}`);
console.log(`Multiplicaçao: ${multiplicacaoDoUsuario}`);
console.log(`Divisao: ${divisaoDoUsuario}`);

//DESAFIO
//1. 
//A. 
const mostraNoConsole = (parametro) => {
    console.log(parametro);
}

//B. 
const somaNumeros = (x , y) => {
  const soma = x + y 
  mostraNoConsole(soma);
}

somaNumeros(2,4);


//2.
function teoremaPitagoras(a, b) {
    const hip = Math.sqrt((a*a) + (b*b));
    return hip
}

const resultadoHip = teoremaPitagoras(7, 9);
console.log(resultadoHip);