//usando ifs aninhados
/* 
const idadeDependente = prompt('Solicitacao de dependente\nQual a idade do dependente?')

if(idadeDependente >= 13){
    if(idadeDependente <= 17){
        console.log('Seu dependente ja pode ter um cartao de credito vinculado ao seu.')
    }else{
        console.log('O dependente ja pode ter seu proprio cartao')
    }
}else{
    console.log('Consulte outras possibilidade do Labank')
}
 */

//-----------------------------------------------

//usando operador logico
/* 
const idadeDependente = prompt('Solicitacao de dependente\nQual a idade do dependente?')

if(idade >= 13 && idade <= 17){
    console.log('Seu dependente ja pode ter um cartao de credito vinculado ao seu.')
}else if(idadeDependente > 17 ){
    console.log('O dependente ja pode ter seu proprio cartao')
}else{
    console.log('Consulte outras possibilidade do Labank')
}
 */

//-----------------------------------------------

//usando o if ternario
/* idadeDependente == 13 ? console.log('A idade do dependente eh 13 e ja pode ter um cartao') : console.log('verifique as opcoes possiveis') */


//-----------------------------------------------

//usand switch-case
/* 
const opcoes = Number(prompt('Digite uma das opcoes:\n1 - Facil\n2 - Black\n3 - Platinum\n4 - Master Gold'))

switch (opcoes){
    case 1:
        console.log('Facil')
        break
    case 2:
        console.log('Black')
        break
    case 3:
        console.log('Platinum')
        break
    case 4:
        console.log('Master Gold')
        break
    default:
        console.log('Escolha uma das quarto opcoes disponiveis')
        break
}
 */

//-----------------------------------------------

//para guardar na cabeca

const verificarNumero = Number(prompt('Digite um numero:'))

//a
/* if ((verificarNumero % 2) == 0){
    if((verificarNumero % 3) == 0){
    console.log('Numero divisivel por 2 e por 3')
    }else{
        console.log('Numero eh divisivel apenas por 2')
    }
}else{
    console.log('Numero nao eh divisivel nem por 2 e nem por 3')
} */

//b
/* if ((verificarNumero % 2) == 0 && (verificarNumero % 3) == 0){
    //if ternario
    //verificarNumero == 30 ? console.log('UFA ACERTEI!') : console.log('Nao foi dessa vez :(')
    switch(verificarNumero){
        case 6:
            console.log('Voce escolheu o numero 6.\nParabens, seu numero eh divisivel por 2 e por 3')
            break
        case 12:
            console.log('Voce escolheu o numero 12.\nParabens, seu numero eh divisivel por 2 e por 3')
            break
        case 18:
            console.log('Voce escolheu o numero 18.\nParabens, seu numero eh divisivel por 2 e por 3')
            break
        case 24:
            console.log('Voce escolheu o numero 24.\nParabens, seu numero eh divisivel por 2 e por 3')
            break
        case 30:
            console.log('Voce escolheu o numero 30.\nParabens, seu numero eh divisivel por 2 e por 3')
            break
        default:
            console.log('O numero eh maior que 30 ou menor que 6')
    }
}else if((verificarNumero % 2) == 0){
        console.log('Numero eh divisivel apenas por 2')
}else{
    console.log('Numero nao eh divisivel por 2 e 3')
} */
