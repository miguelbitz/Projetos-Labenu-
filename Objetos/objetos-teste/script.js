
const estudante = {
    nome: "Juliana",
    sobrenome: "Moraes",
    numeroMatricula: 1515,
    notasDoSemestre: [8, 10]
}

estudante.modulo = "JavaScript"

/* console.log(estudante.nome)
console.log(estudante.notasDoSemestre[1])
console.log(estudante.modulo)
console.log(estudante)

console.log(estudante['nome'])
console.log(estudante['notasDoSemestre'][1])
console.log(estudante['modulo'])

console.log(estudante.notasDoSemestre)
console.log(estudante.notasDoSemestre[1])
console.log(estudante.notasDoSemestre[2]) */

const novoEstudante = {
    ...estudante,
    nome: "Astrodev",
    notasDoSemestre: [...estudante.notasDoSemestre, 9],
    modulo: "HTML"
}

novoEstudante.notasDoSemestre.push(8)
console.log(novoEstudante.notasDoSemestre)

//console.log(estudante)
//console.log(novoEstudante)

const estudantesLabenu = [estudante, novoEstudante]

console.log(estudantesLabenu[0].nome)

/* const estudantesLabenu = []

estudantesLabenu.push(estudante)
estudantesLabenu.push(novoEstudante) */


console.log(estudantesLabenu)

const teste = [{nome:'Fabio', idade: 15}]

const arrayTeste = [
    {
        nome:'Fernanda', 
        idade: 20
    }, 
    {
        nome:'Matheus', 
        idade: 10
    }
]

console.log("arrayTeste", arrayTeste)


const meuObjeto = {
    nome:"Anderson",
    idade: 20,
    carros: [
        {marca: "fiat", modelo:"uno"}, 
        {marca:"bmw", modelo:"x1"}, 
        {marca:"bmw", modelo:"x6"}
    ]
}

console.log(meuObjeto.carros[1].modelo.length)

//estudantesLabenu.push(estudante)
//estudantesLabenu.push(novoEstudante)
/* 
console.log(estudantesLabenu)
console.log(estudantesLabenu[1].nome) */


/****** EXERCÍCIO DE FIXAÇÃO ******/

const carrinho = {
    nome:"Juliana",
    formaPg:"debito",
    endereco:"Rua dos bobos, 0"
}

carrinho.compras = [
    {
        nome:"arroz",
        preco: 5.00,
        quantidade: 1
    },
    {
        nome:"macarrao",
        preco: 15.00,
        quantidade: 2
    }
]

console.log(carrinho)
console.log(carrinho.compras.length)

const carrinhoPresente = {
    ...carrinho,
    nome:"Viviane",
    formaPg:"cartão presente"
}


console.log(carrinhoPresente)
