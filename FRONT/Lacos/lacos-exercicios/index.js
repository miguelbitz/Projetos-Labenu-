// A Jessica recebe 100 reais de mesada todo mês, mas sempre gasta tudo.
// Ela quer comprar um novo celular que custa R$ 3000 reais, mas seus pais disseram
// que ela precisa guardar sua mesada até atingir o valor do celular.
// - Crie uma variavel mesada recebendo o valor 0
// - Use o while para fazer um loop e atigir 3 mil, guardando 100 reais por vez.
// - Mostre o valor a cada rodada do loop e fora do loop mostre uma mensagem dizendo que o valor total foi atingido



// let mesada = 100

// while (mesada < 1000) {
//   mesada++;
//   console.log( mesada );
// }
// console.log("Consegui guardar R$ " + mesada);

// let num = Number(prompt('Digite um número entre 1 e 10'))



// while(num !== 8 ){
//     alert('Esse não é o número secreto')
//     num = Number(prompt('Digite novamente número entre 1 e 10'))
// }
// alert("Você acertou o número secreto, é o número", + num)

let saldo = 12
console.log("Extrato R$", + saldo)
let deposito = Number(prompt('Quanto quer depositar'))

while(deposito){
    saldo = saldo + deposito
    console.log("Novo extrato", saldo)
    deposito = Number(prompt('Quer depositar mais'))
}

console.log("O salto atual é de", saldo)


