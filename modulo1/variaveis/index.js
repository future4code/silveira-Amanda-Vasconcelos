/*

1.  10
    10, 5

2.  10, 10,10

3.  let horasDiarias
    let pagamentoDiario

*/
/*let nome; 
let idade;  
console.log (typeof nome, typeof idade);
resposta no console: undefined
*/

let nome = prompt("Diga seu nome");
let idade = prompt("Diga sua idade");

console.log(typeof nome, typeof idade);

/* string, string */

console.log("Olá, " + nome + ". Voce tem " + idade + " anos.");

let almoco = prompt("Voce almocou hoje?");
console.log("Voce almocou hoje? " + almoco); 

let roupa = prompt("Voce está nu?");
console.log("Voce está nu? " + roupa);

let estudo = prompt("Voce esta estudando para ser DEV? ");
console.log("Voce esta estudando para ser DEV? " + estudo);

let a = 40
let b = 80
let c = 0

c = a
a = b
b = c


console.log("O novo valor de a é " + a); //o novo valor de a é 80
console.log("O novo valor de b é " + b); //o novo valor de b é 40
