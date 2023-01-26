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

//declarando variaveis globais
let cartaComputador1 = comprarCarta()
let cartaComputador2 = comprarCarta()
let cartaComputadorAdicional = comprarCarta()


let sortearCarta1 = comprarCarta()
let sortearCarta2 = comprarCarta()

let sortearCartaAdicional = comprarCarta()


const cartasSorteadas = []

const cartasComputador = []

const arrayPontosUsuario = []
const arrayPontosComputador = []

let pontuacaoUsuario = 0
let pontuacaoComputador = 0

//iniciando o jogo
console.log('Boas vindas ao jogo de Black Jack')

if (confirm('Quer iniciar uma nova rodada?')) {
   //se o jogador receber 2 "As" ele compra novas cartas
   if (sortearCarta1 + sortearCarta2 > 21) {
      sortearCarta1 = comprarCarta()
      sortearCarta2 = comprarCarta()
   }

   //colocando cartas sorteadas no array de usuario
   cartasSorteadas.push(sortearCarta1.texto)
   cartasSorteadas.push(sortearCarta2.texto)

   //colocando pontos no array de pontos do usuario
   arrayPontosUsuario.push(sortearCarta1.valor)
   arrayPontosUsuario.push(sortearCarta2.valor)

   //colocando cartas sorteadas no array do computador

   cartasComputador.push(cartaComputador1.texto)

   //colocando pontos no array de pontos do computador
   arrayPontosComputador.push(cartaComputador1.valor)



   //adicionando mais carta
   //caso o usuario clique ok ele reproduz o que tem dentro do if
   if (confirm(`Suas cartas sao ${cartasSorteadas} .A carta revelada do computador eh ${cartaComputador1.texto}\nDeseja comprar mais uma carta?`)) {
      //sortear carta puxando a funcao comprarCarta sempre que for chamada
      sortearCartaAdicional = comprarCarta()

      //colocando carta sorteada e valor nos seus respectivos arrays
      cartasSorteadas.push(sortearCartaAdicional.texto)
      arrayPontosUsuario.push(sortearCartaAdicional.valor)

      //adicionando pontos a variavel pontuacaoUsuario
      for (i = 0; i < arrayPontosUsuario.length; i++) {
         pontuacaoUsuario += arrayPontosUsuario[i]
      }

      //enquanto o confirm for true ele continua rodando o while
      while (true) {
         let resposta = confirm(`Suas cartas sao ${cartasSorteadas} .A carta revelada do computador eh ${cartaComputador1.texto}\nDeseja comprar mais uma carta?`)

         //caso o jogador pare de jogar ele sai do if
         if (!resposta) break

         //sortear carta puxando a funcao comprarCarta sempre que for chamada
         sortearCartaAdicional = comprarCarta()

         //colocando carta sorteada e valor nos seus respectivos arrays
         cartasSorteadas.push(sortearCartaAdicional.texto)
         pontuacaoUsuario += sortearCartaAdicional.valor

      }
   } else {
      //caso nao entre no if apenas soma os pontos do usuario
      for (i = 0; i < arrayPontosUsuario.length; i++) {
         pontuacaoUsuario += arrayPontosUsuario[i]
      }
   }



   //fora do if a soma dos pontos do computador
   for (i = 0; i < arrayPontosComputador.length; i++) {
      pontuacaoComputador += arrayPontosComputador[i]
   }

   //while para adiconar cartas para o computador automaticamente ja somando os pontos
   while (pontuacaoComputador <= 21) {
      cartaComputadorAdicional = comprarCarta()
      cartasComputador.push(cartaComputadorAdicional.texto)
      pontuacaoComputador += cartaComputadorAdicional.valor

      if (pontuacaoUsuario < pontuacaoComputador) break
      if (pontuacaoUsuario > 21) break
   }

   const fraseFinal = `Suas cartas sao ${cartasSorteadas} . Sua pontuacao eh ${pontuacaoUsuario} .\n\nAs cartas do computador sao ${cartasComputador} .A pontuacao do computador eh ${pontuacaoComputador}`



   //if do ganhador
   if (pontuacaoUsuario === pontuacaoComputador || (pontuacaoUsuario > 21 && pontuacaoComputador > 21)) {
      alert(fraseFinal + '\n\nEmpate')
   } else if (pontuacaoUsuario > pontuacaoComputador) {
      if (pontuacaoUsuario > 21) {
         alert(fraseFinal + '\n\nO computador ganhou!')
      } else {
         alert(fraseFinal + "\n\nO usuário ganhou!")
      }
   } else if (pontuacaoUsuario < pontuacaoComputador) {
      if (pontuacaoComputador > 21) {
         alert(fraseFinal + "\n\nO usuário ganhou!")
      } else {
         alert(fraseFinal + "\n\nO computador ganhou!")
      }
   } else {
      alert('Algo deu errado')
   }
} else {
   alert('O jogo acabou.')
}

