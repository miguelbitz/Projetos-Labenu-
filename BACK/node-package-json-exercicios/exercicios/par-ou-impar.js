const numeroComputador = Math.floor(Math.random() * 6)
const escolhaJogador = process.argv[2].toLowerCase()
const numeroJogador = process.argv[3]
const resultado = Number(numeroJogador) + Number(numeroComputador)
const verifica = resultado % 2

if(escolhaJogador === "par"){
    if(verifica === 0){
        console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${resultado}. Você ganhou!`)
    }else{
        console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${resultado}. Você perdeu!`)
    }
}else if(escolhaJogador === "impar"){
    if(verifica === 0){
        console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${resultado}. Você perdeu!`)
    }else{
        console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${resultado}. Você ganhou!`)
    }
}else{
    console.log(`Escolha entre "par" ou "impar"`)
}