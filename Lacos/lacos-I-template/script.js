//ELEMENTOS NECESSÁRIOS
/* Inicialização de váriável*/
/* Condição de continuação*/
/* Um conjunto de ações*/
/* Uma alteração que mude a condição de continuação*/

//WHILE
/*  
let numero = Number(prompt("Acerte o numero sorteado.\nDigite um numero:\nQuanto maior a soma dos numeros maior chances de perder"))

let soma = 0

while(numero !== 0){
    soma += numero // (soma = soma + numero)
    console.log(numero)
    numero = Number(prompt("Errou.\nDigite outro numero:"))
}

console.log(soma)
  */


//FOR
/* 
let numero = Number(prompt('Digite um numero:'))


for(let i = 0; i <= numero; i++){
    console.log(i)
}
 */

//FOR COM ARRAYS
/* 
const numeros = [1, 2, 3, 4, 5]

for(let indice = 0; indice < numeros.length; indice++){
    console.log(`O numero do indice ${indice} eh ${numeros[indice]}`)
}
 */

// PARA GUARDAR NA CABECA


//1
/* 
let tipoUsuario = prompt('Qual seu tipo de usuario?\nA - Administrador\nB - Usuario Comum\nC - Usuario Assinante').toUpperCase()

while(tipoUsuario !== "A"){
    console.log('Acesso Negado')
    tipoUsuario = prompt('ACESSO NEGADO.\NQual seu tipo de usuario?\nA - Administrador\nB - Usuario Comum\nC - Usuario Assinante').toUpperCase()
}

console.log('Boas vindas, admin!')
 */

//2
/* 
let numero = Number(prompt('Digite um numero:'))

for(let i = 0; i<=10; i++){
    console.log(`${numero}x${i} = ${numero*i}`)
}
 */

//3
/* 
const array = ["churrasco", "hamburguer", "bife a milanesa c/ maionese caseira", "strogonoff", "batata frita"]

for(let i=0; i < array.length; i++){
    console.log(array[i].toUpperCase())
}
*/
