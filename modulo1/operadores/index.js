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
console.log("O resultado da condicao é  ", true)

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
//1.
console.log("77 Fahrenheit em Kelvin é ", (77 - 32) * (5/9) + 273.15 , " K.");
console.log("80 Celsius em Fahrenheit é ", (80 * (9/5) + 32) , " F.");
console.log("30 Celsius em Fahrenheit é ", (30 * (9/5) + 32) , " F.");
console.log("30 Celsius em Kelvin é ", (30 + 273) , " K.");

const temperaturaCelsius = +prompt("Diga uma temperatura em Celsius para ser transformada em Kelvin");
console.log("A temperatura em Celsius indicada pelo usuário ao ser convertida em Kelvin é ", temperaturaCelsius + 273, " K.");

//2.
const quilowatts = 280;
console.log("O valor a ser pago é ", (280 * 0.05), " reais.");
console.log("Com desconto de 15%, o valor a ser pago é de ", (280 * 0.05) * (85/100) ," reais.");


//3.
console.log("20lb equivalem a ", (20 / 2.2046) , " kg.");
console.log("10.5oz equivalem a ",  (10 * 0.0283) ," kg.");
console.log("100mi equivalem a ", (100 / 0.00062137)," m.");
console.log("50ft equivalem a ", (50 * 0.3048), " m.");
console.log("103.56gal equivalem a ",((103.56 * 473176473)/125000000)," l.");
console.log("450 xic equivalem a ", (450 * 6)/25 ," l.");

const conversaoUsuario = +prompt("Qual distancia em pés voce quer converter para metros?");
console.log("A distancia em metros é ", (conversaoUsuario * 0.3048),".");
