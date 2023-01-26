//a
const soma = (num1, num2) =>{
    const soma = num1 + num2
    return soma
}

console.log(soma(2,4))

//b
const maiorNum = (num1, num2) =>{
    const diferencaNum = num1 >= num2
    return `o numer 1 eh maior ou igual ao numero 2? ${diferencaNum}`
}

console.log(maiorNum(10,5))
console.log(maiorNum(3,5))

//c
const numPar = (num) =>{
    const par = num % 2
    const verificarPar = par === 0
    return `o numero eh par? ${verificarPar}`
}

console.log(numPar(2))
console.log(numPar(1))

//d
const salarioLiquido = (salario) =>{
    const descInss = salario *0.1
    const salarioReal = salario - descInss
    return `Seu salario liquido eh ${salarioReal} `
}

console.log(salarioLiquido(5000))