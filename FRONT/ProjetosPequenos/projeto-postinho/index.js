/* 
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
//console.log(checarDesigualdade(0, null));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a}===${b} é ${a === b}`
}

//console.log(checarIgualdade(1,1))

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b) {
    return `Na verificacao se eh maior ${a} maior que ${b} é ${a > b}`
}

//console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = (nomeUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade) => {
    const usuario = []
    if ((2022 - anoDeNascimento) >= 18) {
        if (senhaDoUsuario.length >= 6) {
            if (nacionalidade.toLowerCase() === "brasileira") {
                usuario.push(nomeUsuario)
                usuario.push(anoDeNascimento)
                usuario.push(senhaDoUsuario)
                usuario.push(nacionalidade)

                return usuario
            } else {
                return 'Nao foi possivel cadastrar o usuario, nacionalidade precisa ser brasileira'
            }
        } else {
            return 'Nao foi possivel cadastrar o usuario, senha tem que ter no minimo 6 digitos'
        }
    } else {
        return 'Nao foi possivel cadastrar o usuario, ele eh menor de idade.'
    }

}
//console.log(cadastro('Miguel', 1995 , 'miguel', 'brasileira'));

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    const senha = 'miguel'

    const verificarSenha = prompt('Digite a senha:')

    if (verificarSenha === senha) {
        return 'Usuario Logado'
    } else {
        return ' Senha Invalida'
    }

}

//console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = (nome, vacina) => {
    const verificaVacina = vacina.toLowerCase()
    let tempo
    let data = new Date()

    switch (verificaVacina) {
        case 'coronavac':
            tempo = 28
            data.setDate(data.getDate() + tempo)
            break
        case 'astrazenica':
            tempo = 90
            data.setDate(data.getDate() + tempo)
            break
        case 'pfizer':
            tempo = 90
            data.setDate(data.getDate() + tempo)
            break
        default:
            return 'Vacina Invalida'
    }

    return `Ola ${nome}! A proxima dose da ${vacina} eh daqui a ${tempo} dias. Compareca no posto na data ${data}`

}
//console.log(primeiraDose('Miguel', 'Astrazenica'))


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    for (i = 0; i < usuarios.length; i++) {
        //verifica se o nome eh igual
        if (nomeDoUsuario === usuarios[i].nome) {

            //altera propriedade do usuario colocando em uma nova variavel
            const alterarUsuario = {
                ...usuarios[i],
                imunizacao: 'completa'
            }

            //coloca a variavel criada dentro do array do usuario
            usuarios.push(alterarUsuario)

            //cria uma nova variavel para mapear a funcao de excluir repeticao
            const usuariosSemRepeticao = new Map()

            //funcao para verificar repeticao
            usuarios.forEach((usuario) => {
                if (!usuariosSemRepeticao.has(usuarios.nome)) {
                    usuariosSemRepeticao.set(usuario.nome, usuario)
                }
            })
            return [...usuariosSemRepeticao.values()]

        }
    }


}
//console.log(segundaDose("Artur"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]


    //usando for
    for (i = 0; i < usuarios.length; i++) {
        if (usuarios[i].imunizacao === "incompleta") {
            console.log(`Ola ${usuarios[i].nome}! Sua imunizacao esta ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
        }
    }

    //usando while
    /*     let i = 0
        while(i<usuarios.length){
            if(usuarios[i].imunizacao === "incompleta"){
                console.log( `Ola ${usuarios[i].nome}! Sua imunizacao esta ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
            }
        
            i++
        } */

//}
//console.log(avisoAosAtrasados());

 
// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    //  Sua lógica aqui
}
console.log(login());

const primeiraDose = () => {
    //  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());