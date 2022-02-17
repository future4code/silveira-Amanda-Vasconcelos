/*

PRIMEIRA QUESTAO:
let array
console.log('a. ', array)
Resposta: undefined

array = null
console.log('b. ', array)
Resposta: null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
Resposta: 11

let i = 0 //index?
console.log('d. ', array[i])
Resposta: 3

array[i+1] = 19 // nao entendi
console.log('e. ', array)
Resposta: 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

const valor = array[i+6]
console.log('f. ', valor)
Resposta: 9

SEGUNDA QUESTAO:
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
Resposta: 
    Frase: "Subi num ônibus em Marrocos"
        "SUBI NUM ONIBUS EM MARROCOS"
           No console será exibida a seguinte frase: SUBI NUM ONIBUS EM MIRROCOS 27
                
*/


//QUESTAO 1.  NOME E EMAIL
const nomeUsuario = prompt("Qual é o seu nome?");
const emailUsuario = prompt("Digite seu email:");
console.log(`O email ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo, ${nomeUsuario}.`);

//QUESTAO 2. LISTA DE COMIDAS
const comidasPreferidas = ['queijo', 'cupuacu', 'chocolate', 'pizza', 'sushi' ];
console.log(comidasPreferidas);

console.log(`Essas sao minhas comidas preferidas:`)
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);
//console.log(`Essas sao minhas comidas preferidas: ${comidasPreferidas.join(`\r\n`)} `); Sugestao fornecida por colega no Slack. 

const comidaPreferidaUsuario = prompt("Qual é a sua comida preferida?");
const substituindoComida = comidasPreferidas.splice(1, 1 , comidaPreferidaUsuario);
console.log(substituindoComida); //mostra o elemento excluído 
console.log(comidasPreferidas); //mostra a lista atual após o splice

//QUESTAO 3. LISTA DE TAREFAS
const listaDeTarefas = [];
const tarefasUmUsuario = prompt("Primeira tarefa do dia");
const tarefasDoisUsuario = prompt("Segunda tarefa do dia");
const tarefasTresUsuario = prompt("Terceira tarefa do dia");

listaDeTarefas.push(tarefasUmUsuario);
listaDeTarefas.push(tarefasDoisUsuario);
listaDeTarefas.push(tarefasTresUsuario);

console.log(listaDeTarefas);

const removerTarefa = Number(prompt("Escolha uma tarefa realizada para remover da lista"));
const removendoTarefa = listaDeTarefas.splice(removerTarefa - 1, 1); // -1 é utilizado pq o índice começa com 0
//const removendoTarefa = listaDeTarefas.splice(removerTarefa);
//ATENÇAO: .splice(i) retorna apenas o elemento excluido; E splice(i,n) mantem a lista sem o elemento do índice i. A lista pode ser acessada chamando o nome do array. 

console.log(removendoTarefa);
console.log(listaDeTarefas);


//DESAFIO
//PRIMEIRA QUESTAO
const fraseUsuario = prompt("Escreva uma frase:");
const fraseEmString = fraseUsuario.split(" ");

console.log(fraseEmString);

//SEGUNDA QUESTAO
const listaFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
const procurandoAbacaxi = listaFrutas.indexOf("Abacaxi");

console.log(procurandoAbacaxi +", " + listaFrutas.length);