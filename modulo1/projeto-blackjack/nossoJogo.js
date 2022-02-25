/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
function criarJogador(qtdCartas) {
   const jogador = []

   for(let i = 0; i < qtdCartas; i ++) {
      let carta = comprarCarta()
      jogador.push(carta)
   }

   return jogador
}

console.log("Boas vindas ao jogo de Blackjack!");
if(confirm("Quer iniciar uma nova rodada?")) {
   const usuario = criarJogador(2);
   const computador = criarJogador(2);

   const pontuacaoCartasUsuario = usuario.map((carta, index, array) => {
      carta.valor
   })

   const pontuacaoCartasComputador = usuario.map((carta, index, array) => {
      carta.valor
   })
   

} else {
	console.log("O jogo acabou");
}