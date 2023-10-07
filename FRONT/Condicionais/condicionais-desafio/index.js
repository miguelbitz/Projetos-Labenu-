//1
/* 
const idade = Number(prompt('Digite sua idade:'))

if(idade>18){
    console.log('Voce ja pode dirigir')
}else{
    console.log('Voce nao pode dirigir')
}
 */

//2
/* 
const turnoDoDia = prompt('Digite o turno do dia que voce estuda:\nM (matutino)\nV (vespertino)\nN (noturno').toUpperCase()

if(turnoDoDia === "M"){
    console.log("Bom dia!")
}else if(turnoDoDia === "V"){
    console.log("Boa tarde!")
}else{
    console.log("Boa noite!")
}
 */

//3
/* 
const turnoDoDia = prompt('Digite o turno do dia que voce estuda:\nM (matutino)\nV (vespertino)\nN (noturno').toUpperCase()

switch(turnoDoDia){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Turno Inexistente")        
}
 */

//4
//DESAFIO
//1
/* 
const genero = prompt("Digite o genero do filme:").toLowerCase()

const precoIng = prompt("Digite o valor do ingresso:")

if(genero === "fantasia" && precoIng < 15){
    const lanche = prompt('Qual lanchinho voce vai comprar:\nPipoca\nChocolate\nDoces')
    console.log(`Bom filme! Aproveite o seu${lanche}`)
}else{
    console.log("Escolha outro filme")
}
 */

//2
const usuario = {
    nome: prompt("Digite seu nome completo:"),
    tipoJogo: prompt("Digite o tipo de jogo:\nIN - Internacional\nDO - Domestico").toUpperCase(),
    etapaJogo: prompt("Digite a etapa do jogo:\nSF - sem-final\nDT - decisao terceiro lugar\nFI - final").toUpperCase(),
    categoria: Number(prompt("Categoria:\n1\n2\n3\n4")),
    quantIngresso: Number(prompt("Digite a quantidade de ingressos:"))
}

const calcularIng = (usuario) => {
    let valorIngresso = 0



    if (usuario.tipoJogo === "DO" && usuario.etapaJogo === "SF") {
        if (usuario.categoria === 1) {
            valorIngresso = 1320
        }else if(usuario.categoria === 2){
            valorIngresso = 880
        }else if(usuario.categoria === 3){
            valorIngresso = 550
        }else {
            valorIngresso = 220
        }
    }else if(usuario.tipoJogo === "DO" && usuario.etapaJogo === "DT"){
        if (usuario.categoria === 1) {
            valorIngresso = 660
        }else if(usuario.categoria === 2){
            valorIngresso = 440
        }else if(usuario.categoria === 3){
            valorIngresso = 330
        }else {
            valorIngresso = 170
        }
    }else{
        if (usuario.categoria === 1) {
            valorIngresso = 1980
        }else if(usuario.categoria === 2){
            valorIngresso = 1320
        }else if(usuario.categoria === 3){
            valorIngresso = 880
        }else {
            valorIngresso = 330
        }
    }

    let valorTotal = usuario.quantIngresso * valorIngresso

    let valorTotalInternacional = valorTotal / 4.1

    let valorIngressoInternacional = valorIngresso / 4.1

    if (usuario.tipoJogo.toUpperCase() === "DO") {
        console.log(`---Dados da compra---\nNome do cliente: ${usuario.nome}\nTipo do jogo: ${usuario.tipoJogo} \nEtapa do jogo: ${usuario.etapaJogo}\nCategoria: ${usuario.categoria} \nQuantidade de Ingressos: ${usuario.quantIngresso}\n\n---Valores---\nValor do ingresso: R$${valorIngresso}\nValor total: R$${valorTotal}`)
    } else {
        console.log(`---Dados da compra---\nNome do cliente: ${usuario.nome}\nTipo do jogo: ${usuario.tipoJogo} \nEtapa do jogo: ${usuario.etapaJogo}\nCategoria: ${usuario.categoria} \nQuantidade de Ingressos: ${usuario.quantIngresso}\n---Valores---\nValor do ingresso: U$${valorIngressoInternacional.toFixed(2)}\nValor total: U$${valorTotalInternacional.toFixed(2)}`)
    }

}


console.log(calcularIng(usuario))
