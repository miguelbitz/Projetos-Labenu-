const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//a
const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Agua"
}

//b
pokemon1.ataques = []

//c-
const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}

pokemon1.ataques.push(ataque)
console.log(pokemon1)
//c
pokemon2.ataques = {...ataque}

//d
pokemon1.ataques = {
    ...ataque,
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama"
} 

//e
pokemon2.ataques = {
    ...ataque,
    nome: "Jato de Agua",
    dano: 40,
    tipo: "Agua"
}

//f
console.log(pokemon1)
console.log(pokemon2)