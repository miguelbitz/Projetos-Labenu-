const nome = prompt("Qual seu nome?")
const comidaFav1 = prompt("Qual suas primeira comidas favoritas?")
const comidaFav2 = prompt("Qual suas segunda comidas favoritas?")
const comidaFav3 = prompt("Qual suas terceira comidas favoritas?")

const priMaiuscula = (minhaString) => {
    const primeiraLetra = minhaString[0].toUpperCase()
    const restante = minhaString.substring(1).toLowerCase()
    return primeiraLetra + restante
}

const nomePrimeiraMaiuscula = priMaiuscula(nome)

console.log(`Estas sao as comidas favoritas de ${nomePrimeiraMaiuscula}:\nComida 1: ${comidaFav1}\nComida 2: ${comidaFav2}\nComida 3: ${comidaFav3}`)