//DESAFIO 1
/* 
if (confirm('Vamos Jogar')) {
  let numeroEscolhido = Number(prompt('Digite o numero a ser adivinhado:'))

  let numeroSorteado = Number(prompt('Chute um numero'))

  let i = 0

  console.log(`O número chutado foi: ${numeroSorteado}`)

  while (numeroSorteado !== numeroEscolhido) {
    i++
    numeroSorteado = Number(prompt('Errou. O numero escolhido eh maior/menor'))
    console.log(`O número chutado foi: ${numeroSorteado}`)
  }
  console.log(`Acertou!!!\nO numero de tentativas foi ${i}`)
}
 */


//DESAFIO 2
if (confirm('Vamos Jogar')) {
  let numeroEscolhido = Number(prompt('Digite um numero de 0 a 100 para ser adivinhado:'))

  let i = 0
  let numeroSorteado = Math.floor((Math.random()* 100)+ 1)

  while (numeroSorteado !== numeroEscolhido) {
    i++
    console.log(`Errou. O numero escolhido eh maior/menor\nO número chutado foi: ${numeroSorteado}`)
    numeroSorteado = Math.floor((Math.random()* 100)+ 1)
  }
  console.log(`O número chutado foi: ${numeroSorteado}\n\nAcertou!!!\nO numero de tentativas foi ${i}`)
}

console.log('Voce saiu do jogo\nAtualize a pagina para jogar novamente')