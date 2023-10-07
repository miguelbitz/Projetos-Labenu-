const gerarEscolhaAleatoria = () => {
    const opcoes = ["pedra", "papel", "tesoura"]
    const escolhaComputador = Math.floor(Math.random() * opcoes.length)
    return opcoes[escolhaComputador]
}

const determinarResultado = (escolhaJogador, escolhaComputador) => {
    if (escolhaJogador === escolhaComputador) {
        return "Empate!"
    } else if (
        (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
        (escolhaJogador === "tesoura" && escolhaComputador === "papel")
    ) {
        return "Você ganhou!"
    } else {
        return "Você perdeu!"
    }
}

const escolhaJogador = process.argv[2].toLowerCase()


if (escolhaJogador && ["pedra", "papel", "tesoura"].includes(escolhaJogador)) {
    const escolhaComputador = gerarEscolhaAleatoria()

    const resultado = determinarResultado(escolhaJogador, escolhaComputador)

    console.log(`Você escolheu ${escolhaJogador} e o computador escolheu ${escolhaComputador}. ${resultado}`)
} else {
    console.log("Escolha inválida. Por favor, escolha entre pedra, papel ou tesoura.")
}
