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
    console.log(`Boas vindas ao jogo de Blackjack!`);

    if (confirm(`Quer iniciar uma rodada?`)){
       // const usuario = []
       // const computador = []
       
       // for (i = 0; i < 2; i++) {
       //    usuario.push(comprarCarta())
       //    computador.push(comprarCarta())
       // }
    
       const usuario = [comprarCarta(), comprarCarta()]
       const computador = [comprarCarta(), comprarCarta()]
    
       const somaUsuario = usuario[0].valor + usuario[1].valor
       const somaComputador = computador[0].valor + computador[1].valor
    
       console.log(`Usuário - cartas: ${usuario[0].texto} e ${usuario[1].texto} - pontuação ${somaUsuario}`);
       console.log(`Computador - cartas: ${computador[0].texto} e ${computador[1].texto} - pontuação ${somaComputador}`);
    
       if (somaUsuario > somaComputador){
          console.log(`Usuário venceu`)
       } else if (somaUsuario < somaComputador) {
          console.log(`Computador venceu`)
       } else {
          console.log(`Empate!`)
       }
    
    } else {
       console.log(`Jogo cancelado`);
    }