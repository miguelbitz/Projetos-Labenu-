//DESAFIOS

//1
/* 
const soma = (numerosSomados) =>{
    return `A soma eh ${numerosSomados}`
}

const numeros = (num1, num2) =>{
    return num1 + num2
}

console.log(soma(numeros(3, 4)))
 */

//2
/* 
//Math.sqrt(n) = usando para fazer a raiz quadrado do numero entre parenteses
//Math.pow(n, expoente) = usando para elevar o numero ao expoente
const teoremaPitagoras = (a, b) =>{
    const hip = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    return hip
}

console.log(teoremaPitagoras(7, 8))

// OUTRO METODO

const teoremaPitagoras2 = (a, b) =>{
    const hipotenusaAoQuadrado = a ** 2 + b ** 2
    const hipotenusa = hipotenusaAoQuadrado ** (1/2)
    return hipotenusa
}

console.log(teoremaPitagoras2(7, 8))
  */