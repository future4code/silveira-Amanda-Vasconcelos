// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }


//A. Ele faz um teste que diz se o número é par ou nao. Se o numero for par, a resposta no console será ˜passou no teste˜. Se nao, "Não passou no teste.". 
//B. Pares
//C. Ímpares

// //SEGUNDA QUESTAO
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. para informar os preço de algumas frutas ao usuário de acordo com a fruta que ele digitar no campo do prompt. 
// b. O preço da Maça é R$ 2.25
// c. O preço da fruta  Pêra  é  R$  5. Como nao tinha o break de parada, o código continuou executando as outras verificaçoes e foi até o Default. 

//TERCEIRA QUESTAO
//const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//     console.log("Esse número passou no teste")
//       let mensagem = "Essa mensagem é secreta!!!"
//   }
  
//   console.log(mensagem)
// A. Cria uma variável chamada numero que captura um número do usuário através do prompt.
// B. há erro no console pois o console.log pede para imprimir a variável ˜mensagem" que é uma variável de escopo local e só está presente dentro do if. 


//Escrita de código
//Questao 1. 
const idadeUsuario = Number(prompt(`Qual é a sua idade?`));

function verificacaoMaiorIdade(idade) {
    if (idade >= 18) {
        console.log(`Você pode dirigir`)
    } else {
        console.log(`Você nao pode dirigir`)
    }
}
verificacaoMaiorIdade(idadeUsuario);

//Questao 2. 
const horarioEstudoUsuario = prompt(`Que horas voce estuda? (M(matutino) / T(Tarde) / N(noturno))`);
// function verificacaoHorario(horario) {
//     if (horario === "M") {
//         console.log("Bom dia!")
//     } else if (horario === "T") {
//         console.log("Boa tarde!")
//     } else {
//         console.log("Boa noite!")
//     }
// }

// verificacaoHorario(horarioEstudoUsuario);

//Questao 3. 
switch(horarioEstudoUsuario) {
    case "M":
        console.log("Bom dia!")
        break
    case "T":
        console.log("Boa tarde!")
        break
    default:
        console.log("Boa noite!")
        break
}

// //Questao 4. 
const generoFilme = prompt("Qual é o gerero do filme? Terror ou fantasia?");
const valorFilme = prompt("Qual é o preço do ingresso?");
const snack = prompt("Qual snack voce vai comprar?");

function verificaAceitaConvite(genero, valor, snack) {
    if (genero === "fantasia" && valor < 15){
        
        console.log(`Bom filme!`);
        console.log(`Aproveite o seu ${snack}`);
        
    } else {
        console.log("Escolha outro filme!")
    }
}

verificaAceitaConvite(generoFilme, valorFilme, snack);

