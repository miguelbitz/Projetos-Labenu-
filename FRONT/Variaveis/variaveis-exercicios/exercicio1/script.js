let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

/*retornou os seguinte tipos pois nós não
atribuimos valores as variaveis*/

nome = prompt("Qual seu nome?")
idade = Number (prompt("Qual sua idade?"))

console.log(typeof nome)
console.log(typeof idade)

/*agora que atribuimos valores as variaves,
ele pode mostrar qual tipo é cada uma*/

console.log("Olá", nome, ",voce tem", idade, "anos.")

const perguntaA = "Você já viu algum anime?"
const perguntaB = "Você conhece alguem que gosta?"
const perguntaC = "Você olharia algum episódio se tivesse tempo disponivel?"

const respostaA = prompt(perguntaA)
const respostaB = prompt(perguntaB)
const respostaC = prompt(perguntaC)

console.log(perguntaA, respostaA)
console.log(perguntaB, respostaB)
console.log(perguntaC, respostaC)

