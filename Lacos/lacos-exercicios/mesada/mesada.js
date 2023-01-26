// A Jessica recebe 100 reais de mesada todo mês, mas sempre gasta tudo.
// Ela quer comprar um novo celular que custa R$ 1000 reais, mas seus pais disseram
// que ela precisa guardar sua mesada até atingir o valor do celular.
// - Crie uma variavel somaTotal recebendo o valor 0
// - Use o while para fazer um loop e atigir  mil, guardando 100 reais por vez.
// - Mostre o valor a cada rodada do loop e fora do loop mostre uma mensagem dizendo que o valor total foi atingido

let mesada = 0;

while(mesada < 1000){
    mesada = mesada + 100
    console.log(mesada)
}
console.log('Atingi o valor de R$', mesada)


// for (let mesada = 0 ; mesada <=1000; mesada+=100) {
//   console.log(mesada)
// }