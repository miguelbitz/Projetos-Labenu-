/* # Exercício 2
Crie um array de números que contenha 8 números.
Depois disso, utilize este array para criar duas funcões de array `map()`:

1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const; */

const numeros = [14,27,08,24,12,29,10,7]

//1
const triplos = numeros.map(numeros => numeros * 3)

console.log(triplos)

//2
const metades = triplos.map(numeros => numeros / 2)

console.log(metades)

