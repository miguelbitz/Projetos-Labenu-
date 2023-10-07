//olá mundo!

console.log("Olá Mundo!")


/* 

//usando prompt (caixa de interação com usuario)

const nome = prompt ("Qual é o seu nome?")
*/ 



/* 
const nome = "Miguel"
let idade = 27

console.log(nome)
console.log(idade)

console.log("Olá! Meu nome é", nome, "e tenho", idade, "anos.") 
*/



/* 

//RETORNANDO BOLEAN true

let temPet = true

console.log("temPet",temPet)

const nomePet = "Zoro" 
*/



/* 

//RETORNANDO BOLEAN false

temPet = false 
console.log("temPet",temPet)

const nomePet = null

console.log(nomePet)

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof temPet)
console.log(typeof nomePet) 
*/

/* 

//CONVERTENDO TIPOS

const nome = prompt("Qual seu nome?")
let idade = Number (prompt("Qual a sua idade?")) 
let valorConvertido = idade.toString()
//podemos usar Number(variavel) ou variavel.toString()

console.log(nome, idade)
console.log(typeof nome)
console.log(typeof idade) // posso usar console.log(typeof Number idade)
console.log(typeof valorConvertido)
*/


//exercicio de fixação 1
const nomeEspada = "Wado Ichimonji"
let idadeEspada = 15
let primeiroDono = true

console.log("Espada se chama", nomeEspada, "tem", idadeEspada, "anos e é", primeiroDono)

console.log(typeof nomeEspada)
console.log(typeof idadeEspada)
console.log(typeof primeiroDono)


//exercicio de fixação 2
let a = 30
let b = 20
let c

c = a
a = b
b = c

console.log(a)
console.log(b)

