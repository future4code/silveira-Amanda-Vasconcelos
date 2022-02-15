/*

1.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("O resultado da condicao é ", false)

resultado = bool1 && bool2 && bool3 
console.log("O resultado da condicao é . ", false) 

resultado = !resultado && (bool1 || bool2) 
console.log("O resultado da condicao é  ", false)

console.log("O resultado da condicao é . ", typeof boolean)

2 e 3. 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

Como o valor capturado pelo prompt é sempre uma string, o resultado vai ser uma concatenaçao dos números e nao uma soma. Se o primeiroNumero for 1 e o segundoNumero for 2, o resultado será 12. 
Para que ele consiga exetucar uma operaçao, ele precisa transformar a string em número através do Number() ou +. 

*/

//1.
const idadeUsuario = Number(prompt("Diga sua idade: "));
const idadeMelhorAmigo = Number(prompt("Diga a idade do seu melhor amigo(a)"));
console.log("Sua idade é maior do que a do seu melhor amigo? ", idadeUsuario > idadeMelhorAmigo ); 
console.log("A diferença de idade entre voces é de ", (idadeUsuario - idadeMelhorAmigo));

//2.
const numeroPar = Number(prompt("Insira um número par:"));
console.log("O resto da divisao do numero par por 2 é: " , numeroPar % 2); // O resto sempre vai ser zero pois a divisao será sempre de um número par por 2.

//3. 
const idadeUsuario2 = Number(prompt("Diga sua idade novamente: "));
console.log("Sua idade em meses é: ", idadeUsuario2 * 12);
console.log("Sua idade em dias é: ", idadeUsuario2 * 365);
console.log("Sua idade em horas é: ", idadeUsuario2 * 8760);


//4.
const primeiroNumero = Number(prompt("Escolha um número: "));
const segundoNumero = Number(prompt("Escolha outro número: "));
console.log("O primeiro numero é maior que o segundo?", primeiroNumero > segundoNumero);
console.log("O primeiro numero é igual ao segundo??", primeiroNumero === segundoNumero);
console.log("O primeiro numero é divisível pelo segundo?", ((primeiroNumero % segundoNumero) === 0));
console.log("O segundo numero é divisível pelo primeiro?", ((segundoNumero % primeiroNumero) === 0));

//Desafio:

