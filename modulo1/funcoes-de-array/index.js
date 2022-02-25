/*PRIMEIRA QUESTAO 
const usuarios = [
	{ nome: "Amanda Rangel", apelido: "Mandi" },
	{ nome: "Laís Petra", apelido: "Laura" },
	{ nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
	 console.log(item, index, array)
  })

RESPOSTA: Foi impresso todos os objetos com as duas propriedades (nome e apelido), em seguida a posiçao deles (index) e o array (3)
*/

/*SEGUNDA QUESTAO
const usuarios = [
	{ nome: "Amanda Rangel", apelido: "Mandi" },
	{ nome: "Laís Petra", apelido: "Laura" },
	{ nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
	 return item.nome
  })
  
  console.log(novoArrayB)
  RESPOSTA: Nesse caso, vai ser impresso a propriedade "nome" de cada objeto. Ou seja, os nomes Amanda Rangel, Laís Petra e Letícia Chijo.
*/

/*TERCEIRA QUESTAO
const usuarios = [
	{ nome: "Amanda Rangel", apelido: "Mandi" },
	{ nome: "Laís Petra", apelido: "Laura" },
	{ nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
	 return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
  RESPOSTA: Foram impressos os dois objetos (item) que nao tinham a propriedade "Chijo". Ou seja, os objetos Amanda e Laís. 
  Ele imprimiu o index seguido do objeto com as duas propriedades (nome e sobrenome);
*/


//PRIMEIRA QUESTAO


const pets = [
	{ nome: "Lupin", raca: "Salsicha"},
	{ nome: "Polly", raca: "Lhasa Apso"},
	{ nome: "Madame", raca: "Poodle"},
	{ nome: "Quentinho", raca: "Salsicha"},
	{ nome: "Fluffy", raca: "Poodle"},
	{ nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a) Crie um novo array que contenha apenas o nome dos doguinhos

 const arrayNomesPets = pets.map((item) => {
	return item.nome
 })

 console.log(arrayNomesPets);

 //b) Crie um novo array apenas com os cachorros salsicha

 const arrayCachorrosSalsichas = pets.filter((item, index, array) => {
	 return item.raca == "Salsicha"
 })
 console.log(arrayCachorrosSalsichas);

 //c)
 const arrayPoodles = pets.filter((item, index, array) => {
	 return item.raca == "Poodle"
 })


//console.log(arrayPoodles);

const mensagemDescontoTosa = arrayPoodles.map((item, index, array) => {
	console.log("Você ganhou um cupom de desconto de 10% para tosar o/a " + item.nome + "!")
})


//SEGUNDA QUESTAO 
const produtos = [
	{ nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
	{ nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
	{ nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
	{ nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
	{ nome: "Leite", categoria: "Bebidas", preco: 2.99 },
	{ nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
	{ nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
	{ nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
	{ nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
	{ nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//a)
 const nomeProduto = produtos.map((item, index, array) => {
	 return item.nome;
 })
 console.log(nomeProduto);
//b)
 const nomePrecoProduto = produtos.map((item, index, array) => {
	 console.log(`nome: ${item.nome}, preço ${(item.preco) * 0.95}`)
 })
nomePrecoProduto;
//c)
const bebidas = produtos.filter((item, index, array) => {
	return item.categoria == "Bebidas"
})
console.log(bebidas);
//d)
const ype = produtos.filter((item, index, array) => {
	return item.nome.includes("Ypê")
})
console.log(ype);
//e)
const mensagemYpe = ype.map((item, index, array) => {
	console.log(`Compre ${item.nome} por ${item.preco}`)
})
mensagemYpe;

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

 const pokemonsOrdemAlfabetica = pokemons.map((item, index, array) => {
    return item.nome
 })
 console.log(pokemonsOrdemAlfabetica.sort());

 //b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
 //const numerosSemRepeticao = [...new Set(numeros)];

 //const tipoSemRepeticao = [...new Set(pokemons)]


 