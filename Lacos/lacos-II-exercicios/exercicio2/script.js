let num = prompt('Digite um numero:')

const arrayTabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



for(let i in arrayTabuada){
    console.log(`${num}x${Number(i) + 1}: ${arrayTabuada[i]*num}`)
}