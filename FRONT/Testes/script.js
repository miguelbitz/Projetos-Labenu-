//----retornando o maior numero do array
//const maiorNumero = Math.max(...array)

//----retornando o menor numero do array
//const menorNumero = Math.min(...array) 

//----ordenando por numeros o array
//array.sort((a, b) => a - b)

//----ordenando um array de objeto em ordem alfabetica
/* consultas.sort(function(a, b) {
  if(a.nome < b.nome) {
    return -1;
  } else {
    return true;
  }
}) */

//----removendo repeticoes de um array de objetos
/* 
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]

const tipoSemRepeticao = new Map()

pokemons.forEach((pokemon) => {
  if (!tipoSemRepeticao.has(pokemons.tipo)) {
    tipoSemRepeticao.set(pokemon.tipo, pokemon)
  }
})

console.log([...tipoSemRepeticao.values()])
 */

//----somando numero de um array
/* 
var arr = [1,2,3,4,5,6,7,8,9,10];
var soma = 0;
for(var i = 0; i < arr.length; i++) {
    soma += arr[i];
}
console.log(soma);
 */

//----somando numeros de um array dentro de um array
/* for (i = 0; i < contas.length; i++) {
  let comprasTotal = contas[i].compras.reduce((soma, i) => soma + i)
  return comprasTotal
} */

//----invertendo string (em forma de data) e ordenar
/* const consultas = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]
function retornaArrayOrdenadoPorData(consultas) {

  let datas = []

  for(i=0;i<consultas.length;i++){
    datas.push({
      nome: consultas[i].nome,
      dataDaConsulta: consultas[i].dataDaConsulta
    })
  }

  resultado = datas.sort(function (a, b) {
    const da = a.dataDaConsulta
    const db = b.dataDaConsulta

    a = da[6] + da[7] + da[8] + da[9] + da[3] + da[4] + da[0] + da[1]
    b = db[6] + db[7] + db[8] + db[9] + db[3] + db[4] + db[0] + db[1]

    console.log(a)
    if (a > b) return 1
    if (a < b) return -1
    if (a === b) return 0


  })

  return resultado

}

console.log(retornaArrayOrdenadoPorData(consultas)) */


const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]

const funcaoProcurar = (parametro) =>{
  const procurar = pokemons.filter(procurar => procurar.nome.includes())

  console.log(procurar)
}

funcaoProcurar('Bulbasaur')
