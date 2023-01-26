// O nosso jogo deve informar ao usuário se ele acertou o número secreto

// - Peça ao usuário para escolher um número entre 1 e 10
// - Utilize o while para verificar se o usuário acertou o número secreto 8
// - Cada vez que o usuário errar, um alert deve ser emitdo com a mensagem, "tente outro número" então deve surgir novamente um outro prompt.
// - Se o usuário acerta, mostre um alert com a mensagem, você acertou o número secreto - 8


let num = Number(prompt('Escolha um número entre 1 e 10'))

// while(num !== 8){
//     alert('tente outro número')
//     num = Number(prompt('Escolha um número entre 1 e 10'))
// }
// alert('você acertou o número secreto - 8')


for(let num = " "; num !== 8;){
    alert('tente outro número')
    num = Number(prompt('Escolha um número entre 1 e 10'))
    
}
alert('você acertou o número secreto - 8')



