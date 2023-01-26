/* //função nomeada

function nomeFuncao(nome){
    //corpo da função
    //escopo

}

//função anonima

const funcao = function (){
    //escopo
}

//arrow function

const funcaoArrow = () => {

}

() => {

}
 */



// exemplo arrow function


/* const imprimirNome = (nome) => {
    return `Olá ${nome}`
}

console.log(imprimirNome("Maria")) */


//exemplo function anonima


/*const imprimir = function (nome){
    console.log(`Ola ${nome}, isso eh uma funcao nao nomeada`)
}

imprimir ("Miguel") */


//pratica guiada 1

//passando argumentos

 const imprimirNome = (nome) => {
    return `Olá ${nome}`
}

const meuNome = "Miguel"

console.log (imprimirNome (meuNome))

const imprimir = function (nome){
    console.log(`Ola ${nome}, isso eh uma funcao nao nomeada`)
}

imprimir ("Miguel")


//pratica guiada 2

const numeroPar = (num) =>{
    const par = num % 2
    const verificarPar = par === 0
    const soma = num + 10
    const mult = num * num

    return `o numero ${num} eh par? ${verificarPar}. Somando com 10 o resultado eh ${soma} e multiplicado por ele mesmo eh ${mult}`
} 

//armazenando o retorno da funcao em uma variavel
const resultado = numeroPar(2)
console.log(resultado) 

//chamando a funcao e mostrando no console
//console.log(numeroPar(2))

//pratica guiada 3

const autenticar = (login, senha) =>{
    const loginArmazenado = "miguel"
    const senhaArmazenada = "1234"

    const loginVerificado = loginArmazenado === login
    const senhaVerificada = senhaArmazenada === senha

    const logar = loginVerificado && senhaVerificada

    return logar
}

console.log(autenticar("miguel", "1234"))



const maiorIdade = (nome, anoNascimento, anoAtual) =>{
    const idade = anoAtual - anoNascimento
    const verificaIdade = idade >= 18

    return `${nome} eh maior de idade? ${verificaIdade}`
} 

console.log(maiorIdade("miguel", 1995, 2022))
console.log(maiorIdade("joao", 2005, 2022))