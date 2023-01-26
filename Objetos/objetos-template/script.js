/* 
const estudante = {
    nome: 'Miguel',
    sobrenome: 'Alves',
    numMatricula: 1212,
    notasSemestre: [10,9]
}

console.log(estudante)

estudante.modulo = "JavaScript"

console.log(estudante.nome)
console.log(estudante["sobrenome"])
console.log(estudante.notasSemestre[1])
console.log(estudante.modulo)

const copiaEstudante = {
    ...estudante,
    nome: "Astrodev",
    notasSemestre: [...estudante.notasSemestre, 9], //adicionando um numero dentro do array
    modulo: "HTML"
}

console.log(copiaEstudante)

const estudantesLabenu = [estudante, copiaEstudante]

console.log(estudantesLabenu)
console.log(estudantesLabenu[0].nome) //acessando o nome do primeiro objeto 
*/

const carrinho = {
    nomePessoa: "Miguel",
    formaPagamento: ["credito"],
    end: "av. cristovao colombo 2511"
} // criando objeto carrinho

carrinho.compras = [
    {nomeProduto: "Cerveja",
    precoProduto: 7,
    quantidade: 12},
    {nomeProduto: "Agua",
    precoProduto: 5,
    quantidade: 2},
    {nomeProduto: "Miojo",
    precoProduto: 2,
    quantidade: 6},
] // adicionando um array de objetos dentro do objeto carrinho

console.log(carrinho.compras.length) //mostrando quantidade de produtos

const carrinhoPresente = {
    ...carrinho, 
    nomePessoa: "Giovana",
    formaPagamento: "cartao presente"
} //fazendo copia do carrinho e alterando nome e forma de pagamento

console.log(carrinhoPresente)