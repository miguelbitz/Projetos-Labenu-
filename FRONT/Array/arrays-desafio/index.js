//1
/* 
//criar array vazio
const listaDeTarefas = []

//poerguntar ao usuario 3 tarefas a ser realizadas no dia
const tarefa1 = prompt('Digite primeira tarefa que voce precisa realizar no dia:')
const tarefa2 = prompt('Digite segunda tarefa que voce precisa realizar no dia:')
const tarefa3 = prompt('Digite terceira tarefa que voce precisa realizar no dia:')

//colocar tarefas dentro do array vazio
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)


//selecionando o indice a ser removido
const indiceRealizado = Number(prompt(`Digite o indice de uma tarefa que voce ja realizou:\n0 - ${tarefa1}\n1 - ${tarefa2}\n2 - ${tarefa3}`))

//removendo o indice usando o splice(i, n)
listaDeTarefas.splice(indiceRealizado, 1)

console.log(listaDeTarefas)
*/

//2
/* 
//criando array
const comidasPreferidas = ["bife a milanesa", "ala minuta", "churrasco", "sushi", "strogonoff"]

console.log(comidasPreferidas)

const outraComida = "burguer"

//colocando a variavel dentro do array
comidasPreferidas.push(outraComida)

console.log(comidasPreferidas)

const usuarioComidaPreferida = prompt('digite uma comida preferida:')

//removendo comida do indice 1 e colocando comida escolhida pelo usuario
comidasPreferidas.splice(1, 1, usuarioComidaPreferida)

//colocando array em ordem alfabetica
comidasPreferidas.sort()

console.log(comidasPreferidas)

//revertendo ordem do array (ordem ao contrario)
comidasPreferidas.reverse()

console.log(comidasPreferidas)
 */


//DESAFIOS

//1
/* 
const frase = "o verdadeiro samurai eh aquele que deixa a espada enferrujar na bainha"

//dividindo a frase e colocando dentro de um array onde cada palavra eh um elemento
const fraseCortada = frase.split(" ")

console.log(fraseCortada)
 */

//2
/* 
const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

//localizando o indice da string entre parenteses
const indiceAbacaxi = array.indexOf("Abacaxi")

console.log(`Indice do Abacaxi: ${indiceAbacaxi}\nTamanho do array: ${array.length}`)
 */