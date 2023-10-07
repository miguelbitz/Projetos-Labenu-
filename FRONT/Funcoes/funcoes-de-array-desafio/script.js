const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]

const novoArray = pokemons.map((item) => {
  return item.nome
})

//array que ordena os nomes
const novoArrayOrdenado = novoArray.sort((a, b) => {
  if (a < b) {
    return -1;
  } else {
    return true;
  }
})

console.log(novoArrayOrdenado)

//removend repetices de um array de objetos
const tipoSemRepeticao = new Map()

pokemons.forEach((pokemon) => {
  if (!tipoSemRepeticao.has(pokemons.tipo)) {
    tipoSemRepeticao.set(pokemon.tipo, pokemon)
  }
})

console.log([...tipoSemRepeticao.values()])