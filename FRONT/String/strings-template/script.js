/* const usuario = prompt("Qual seu nome?").toUpperCase() //upper case para letra toda maiuscula
const cor = prompt("Qual sua cor favorita?")


const fraseConcatenada = "A cor favorita de " + usuario + " eh " + cor
const fraseTemplate = `A cor favorita de ${usuario} eh ${cor}`

//concatenacao
console.log(fraseConcatenada)

//template string
console.log(fraseTemplate)




const citacao = prompt("Escreva uma citacao favorita:")

//colocando aspas dentro da string
const fraseCitacao = "\"" + citacao + "\""

//quebra linha
const fraseCompleta = `Nome:${usuario} \nCitacao: ${fraseCitacao} \nCor: ${cor}`

console.log(fraseCitacao)
console.log(fraseCompleta)

//tudo em letra maiuscula upperString
//const usuarioMaiusculo = usuario.toUpperCase()

// tamanho da palavra
console.log(usuario.length)

//se algum caracter pertence a string
console.log(usuario.includes("a"))


//apenas a primeira em maiusculo 
const priMaiuscula = (minhaString) => {
    const primeiraLetra = minhaString[0].toUpperCase()
    const restante = minhaString.substring(1).toLowerCase()
    return primeiraLetra + restante
}

console.log(priMaiuscula("mIGUEL")) */




//exercicio de fixacao

const nomeUsuario = prompt("Digite seu nome:")
const email = prompt("Digite seu email:")

// funcao para primeira letra do nome ficar maiuscula usando funcao

/* 
const priMaiuscula = (minhaString) => {
    const primeiraLetra = minhaString[0].toUpperCase()
    const restante = minhaString.substring(1).toLowerCase()
    return primeiraLetra + restante
}

//colocando funcao em variavel
const nomePrimeiraMaiuscula = priMaiuscula(nomeUsuario)

const fraseConfirmacao = `O email ${email} foi cadastrado com sucesso.\nBoas vindas ${nomePrimeiraMaiuscula}`
*/

//colocando primeira letra em maiusculo
const priMaiuscula = nomeUsuario[0].toUpperCase() + nomeUsuario.substring(1)

const fraseConfirmacao = `O email ${email} foi cadastrado com sucesso.\nBoas vindas ${priMaiuscula}`



//verificando quantidade de caracteres no nome
console.log("Seu nome possui " + nomeUsuario.length + " letras")
//trocando R por L
console.log(fraseConfirmacao.replaceAll("r", "l"))
//verificando se o email tem @
console.log(fraseConfirmacao.includes("@"))










