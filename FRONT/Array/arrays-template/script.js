const arrayString = ["banana", "mamao", "amora", "miguel"]
const arrayNumber = [41, 27, 10]
const arraySortido = ["miguel", 10, true]
const arrayNum = [1]
const arrayVazio = []

//console.log(arrayString.length)
//console.log(arrayString)

//tamanho da string
/* const nome = "miguel"

console.log("length do nome", nome.length) */

//posicao de cada elemento
//console.log(arrayString[0])

//.includes()
/* console.log(arraySortido.includes(10))
console.log(arraySortido.includes(true))
console.log(arraySortido.includes(false))
console.log(arraySortido.includes("gica"))
console.log(arraySortido.includes("miguel"))

console.log(arrayNum)
console.log(arrayNum[0])
console.log(arrayNum.length) */

//espelhamento de array
/* const copiaArrayString= arrayString

console.log("original:", arrayString)
console.log("copia:", copiaArrayString) */


//slice(): copia a array
//const copiaArrayString= arrayString.slice()

//console.log("original:", arrayString)
//console.log("copia:", copiaArrayString)

//push: para adicionar algo no final do array
//copiaArrayString.push("novaString")
//console.log("original:", arrayString)
//console.log("copia com push:", copiaArrayString)

//pop(): remove o ultimo item do array
//console.log(copiaArrayString.pop())
//console.log("nova copia com pop:",copiaArrayString)

//splice(i,n): a partir do numero do indice remove determinada quantidade
//copiaArrayString.splice(2,2)
//console.log("nova copia com splice:",copiaArrayString)


//sort(): ordenar por nome ou por numero
//copiaArrayString.sort()
//console.log(copiaArrayString)

//arrayNumber.sort()
//console.log(arrayNumber)

const arrayNumero = [14, 2, 3, 34, 7, 22, 15]

const copiaArrayNumero = arrayNumero.slice()

copiaArrayNumero.pop()

copiaArrayNumero.push(6)

copiaArrayNumero.splice(2,1)

console.log("original: ", arrayNumero)
console.log("copia: ", copiaArrayNumero)