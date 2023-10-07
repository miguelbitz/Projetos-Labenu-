
const funcao = (idade, terminouEnsinoMedio, cursandoFaculdade) => {
    if(idade >= 18){
        console.log("A pessoa eh maior de idade")
    }else{
        console.log("A pessoa eh menor de idade")   
    }
    
    if(terminouEnsinoMedio){
        console.log("A pessoa terminou o ensino medio")
    }else{
        console.log("A pessoa nao terminou o ensino medio")   
    }
    if(cursandoFaculdade){
        console.log("A pessoa esta cursando alguma faculdade")
    }else{
        console.log("A pessoa NAO esta cursando alguma faculdade")   
    }
}

funcao(27, true, false)








