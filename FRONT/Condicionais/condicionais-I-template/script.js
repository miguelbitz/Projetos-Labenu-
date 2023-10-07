const booleano1 = false
const booleano2 = true 

/* if(booleano1){
    alert('entrou no if')
}else{
    alert('entrou no else. A variavel eh false')
} */

const booleano3 = true

/* if (booleano1 === booleano2){
    alert `O valor das variaveis 1 e 2 sao iguais`
}else if(booleano2 === booleano3){
    alert `O valor das variaveis 2 e 3 sao iguais`
}else if(booleano1 === booleano3){
    alert `O valor das variaveis 1 e 3 sao iguais`
}else{
    alert `Nao existem valores iguais`
} */

const idade = 07

/* if(idade >= 60 || idade >=16 && idade < 18){
    console.log(`Voto facultativo`)
}else if(idade >= 18){
    console.log(`Tem direito ao titulo de editor`)
}else{
    console.log(`Voce nao tem idade minima para emissao do titulo de eleitor`)
} */


//operacao que esta errada pois nao chega no ultimo else

/* if(idade >= 18){
    console.log(`Tem direito ao titulo de eleitor`)
}else if(idade < 18){
    console.log(`Voce nao tem idade minima para emissao do titulo de eleitor`)
}else{
    console.log(`Voto facultativo`)
} */

const media = 12

if(media >= 5 && media <= 10){
    console.log("Voce foi aprovado!")
}else if(media >=3 && media <= 10){
    console.log("Recuperacao")
}else if(media < 3 && media >= 0){
    console.log("Voce foi reprovado")
}else{
    console.log("Dado invalido")
}