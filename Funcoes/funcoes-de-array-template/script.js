const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

/* const objetoPokemon = (arrayPokemon) => {
  const novoArray = []

  for (element of arrayPokemon) {
    const novoPokemon = {
      ...element,
      vida: 100
    }
    novoArray.push(novoPokemon)
  }

  return novoArray
}

objetoPokemon(pokemons)
 */


const aumentarVida = (objeto) => {
  return {
    ...objeto,
    vida: 100
  }
}

//map()

const pokemonsVidaCheia = pokemons.map(aumentarVida)

//console.log(pokemons)
console.log(pokemonsVidaCheia)

//filter()
const pokemonsDeFogo = pokemons.filter((pokemonsDeFogo) => pokemonsDeFogo.tipo === "fogo")

//console.log(pokemonsDeFogo)

//-------------------------------------------------------------------------

const arrayNumeros = [1, 2, 3, 4, 5, 6]

//Declare 2 funcoes:

//- A primeira deve receber um array de numeros, e retornar todos os numeros do array multiplicados por 3

const multiplicarPorTres = (array) => {
  const novoArray = []

  for (element of array) {
    novoArray.push(element * 3)
  }
  return novoArray
}
//console.log(multiplicarPorTres(arrayNumeros))

//-A segunda deve receber um array de numeros, e retornar um array apenas com os numeros pares

const retornarNumerosPares = (array) => {
  let novoArray = []

  for (element of array) {
    if (element % 2 === 0) {
      novoArray.push(element)
    }
  }
  return novoArray
}

//console.log(retornarNumerosPares(arrayNumeros))


//usando funcao callback
//funcao esta puxando outra funcao (ela esta entrando como paramentro na funcao callback)
const funcaoCallback = (funcao, arrayArgumento) => {
  console.log(funcao(arrayArgumento))
}
//argumentos:      funcao       ,     array
//funcaoCallback(multiplicarPorTres, arrayNumeros)
//funcaoCallback(retornarNumerosPares, arrayNumeros)



// funcao de array: map()
// retorna um array modificado
// array.map( () => {} )
const multiplicarPorTresArrow = arrayNumeros.map((array) => array * 3)
//console.log(multiplicarPorTresArrow)


// funcao de array: filter()
// filtra o array
// array.filter( () => {} )
const retornarNumerosParesArrow = arrayNumeros.filter((array) => array % 2 === 0)
//console.log(retornarNumerosParesArrow)
