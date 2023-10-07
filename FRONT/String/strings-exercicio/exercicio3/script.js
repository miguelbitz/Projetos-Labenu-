//Crie a const para a frase aqui

//a
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

console.log(frase)

//b
const novaFrase= frase.replace("verde", "rosa").replace("azul" , "laranja")

console.log(novaFrase)

//c
console.log(novaFrase.includes("verde"))
console.log(novaFrase.includes("laranja"))

//extra

//usando funcao
/*
const fraseExtra = (novaFrase) =>{
    const fraseMaiuscula = novaFrase.substring(75).toUpperCase()
    const fraseInicio = novaFrase.substring(0 , 75)
    return fraseInicio + fraseMaiuscula
    
}

console.log(fraseExtra(novaFrase))
*/

//posicao primeira virgula
let indice = novaFrase.indexOf(",")

//posicao segunda virgula
let novoIndice = novaFrase.indexOf(",", 45)
console.log(novoIndice)//74

//selecionei do indice 0 ate o indice 74 e adicionei a partir do indice 74 letras maiusculas
const fraseMaiuscula = novaFrase.substring(0, 74) + novaFrase.substring(74).toUpperCase()

console.log(fraseMaiuscula)

