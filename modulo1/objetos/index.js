// // const filme = {
// // 	nome: "Auto da Compadecida", 
// // 	ano: 2000, 
// // 	elenco: [
// // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// // 		"Virginia Cavendish"
// // 		], 
// // 	transmissoesHoje: [
// // 		{canal: "Telecine", horario: "21h"}, 
// // 		{canal: "Canal Brasil", horario: "19h"}, 
// // 		{canal: "Globo", horario: "14h"}
// // 		]
// // }

// // console.log(filme.elenco[0])
// // console.log(filme.elenco[filme.elenco.length - 1])
// // console.log(filme.transmissoesHoje[2])

// //1.a: 
// //Matheus Nachtergaele; 3; Globo", horario: "14h"

// //2. a.:
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro): Juca, 3, SRD
// console.log(gato): Juba, 3, SRD
// console.log(tartaruga): Jubo, , 3, SRD
// b.: Os tres pontos faz uma cópia, uma Spread de um objeto. 

// //3. 
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")): 
// console.log(minhaFuncao(pessoa, "altura")) 

// //ESCRITA DE CÓDIGO
// //1.
const pessoa = {
    nome: `Amanda`,
    apelidos: ["Maria", "Amandita", "dona da Mabel"]
}
function apresentandoApelido(dadosDaPessoa){
    const apresentacao = `Eu sou ${dadosDaPessoa.nome}, mas pode me chamar de: ${dadosDaPessoa.apelidos[0]}, ${dadosDaPessoa.apelidos[1]}, ou ${dadosDaPessoa.apelidos[2]}.`
    return apresentacao;
}

console.log(apresentandoApelido(pessoa));

const pessoa2 = {... pessoa, apelidos: ["doidinha", "maluca", "mabeltrovisk"]};

console.log(apresentandoApelido(pessoa2));

// //2. 
const individuo1 = {
    nome: "Maria",
    idade: "27",
    profissao: "apagador de fogo"
}

const individuo2 ={
    nome: "Joao",
    idade: "18",
    profissao: "leitor de livros"
}

function apresentacaoDeIndividuos(individuo) {
    const arrayComInfos = [individuo.nome, individuo.nome.length, individuo.idade, individuo.profissao, individuo.profissao.length];
    return arrayComInfos;
}

console.log(apresentacaoDeIndividuos(individuo1));
console.log(apresentacaoDeIndividuos(individuo2));

//3. 
const carrinho = [];

const objeto1 = {
    nome: `abacaxi`,
    disponibilidade: true
}

const objeto2 = {
    nome: `banana`,
    disponibilidade: true
}

const objeto3 = {
    nome: `jaca`,
    disponibilidade: true
}

function compra(fruta){
    carrinho.push(fruta.nome);
    carrinho.push(fruta.disponibilidade);
}

compra(objeto1);
compra(objeto2);
compra(objeto3);

console.log(carrinho);

