// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length 
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
//   let ultimoElemento = array[array.length - 1]
//   array[array.length - 1] = array[0]
//   array[0] = ultimoElemento
//   return array
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort((a,b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const arrayPar = array.filter((item, index, array) => {
    return item % 2 == 0
  })
  return arrayPar;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayParQuadrado = array.filter((item, index, array) => {
        return item % 2 == 0
      }).map((item) =>{
        return Math.pow(item, 2)
       })
     return arrayParQuadrado;
    
    // const arrayQuadrado = arrayPar.map((item) => {
    //     return Math.pow(item, 2)
    // })
    //return arrayQuadrado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null, array);

//   const maiorNumeroArray = array.filter((item) => {
//     return Math.max(item)
//   })
//   return maiorNumeroArray;
}

// EXERCÍCIO 07
// function retornaObjetoEntreDoisNumeros(num1, num2) {
//     function maiorNumero(num1,num2) {
//         if (num1 > num2) {
//             return num1
//         } else {
//             return num2
//         }
//     }
    
   

//     // })



    
//     // let diferenca = 0

//     return `"maiorNumero":${maiorNumero},"maiorDivisivelPorMenor":${},"diferenca":${}`
//}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   array = []
   // contator é n. Quem diz quantas vezes vou ter que repetir a operaçao de multiplicaçao e push pra dentro do array. 
   for (i = 0; i < n; i++){
       let numero = (2 * i);
       array.push(numero)
   }

   return array;

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}