//a
function soma(num1, num2){
    const soma = num1 + num2
    return `a soma de ${num1} e ${num2} eh ${soma}`
}

function sub(num1, num2){
    const sub = num1 - num2
    return `a subtracao de ${num1} e ${num2} eh ${sub}`
}

function multi(num1, num2){
    const multi = num1 * num2
    return `a multiplicacao de ${num1} e ${num2} eh ${multi}`
}

function divi(num1, num2){
    const divi = num1 / num2
    return `a divisao de ${num1} por ${num2} eh ${divi}`
}

//b
let num1 = Number(prompt("Digite o primeiro numero"))
let num2 = Number(prompt("Digite o segundo numero"))

//c
soma(num1,num2)
sub(num1,num2)
multi(num1,num2)
divi(num1,num2)

//d
const retornoSoma = soma(num1,num2)
console.log(retornoSoma)

const retornoSub = sub(num1,num2)
console.log(retornoSub)

const retornoMulti = multi(num1,num2)
console.log(retornoMulti)

const retornoDivi = divi(num1,num2)
console.log(retornoDivi)