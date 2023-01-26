//Exercicio de interpretacao de codigo

//1a

/* 
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish", "Miguel"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])//mostra o ultimo indice do array
console.log(filme.transmissoesHoje[2])


//console 1 = Matheus Nachtergaele - primeiro indice da chave elenco
//console 2 = Miguel - ultimo indice da chave elenco
//console 3 = canal: "Globo", horario: "14h" - 3 idice da chave transmissoeHoje


//2a

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)


//console 1: nome: juca, idade:  3, raca: SRD
//console 2: nome: juba, idade:  3, raca: SRD
//console 3: nome: jubo, idade:  3, raca: SRD

//2b
//espalhamento ou spread = copia o objeto


//3a

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}


const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // descobrindo valor da propriedade (string) no objeto pessoa
console.log(minhaFuncao(pessoa, "altura")) // descobrindo valor da propriedade mas como nao tem nenhuma propriedade com nome altura entao ele retorna undefined


//console 1: false
//console 2: undefined

//3b
// o primeiro console retorna o valor da propriedade backender que estra na string da funcao
// o segundo retorna o valor undefined pois a propriedade com nome de altura nao existe
*/



//----------------------------------------------------------------------------------------
//Exercicio de escrita de codigo

//1a

/* const pessoa = {
    nome: "Miguel",
    apelido: ["Bitz", " Mig", " Bibi"]
}

const apelidos = (objeto) =>{
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido}`)
}

apelidos(pessoa)


//1b

const novaPessoa = {
    ...pessoa,
    apelido: ["Migu-el", " Mi", " mBitz"]
}

apelidos(novaPessoa)
 */

/* //2a

const pessoa1 = {
    nome: "Miguel",
    idade: 27,
    profissao: "Gerente"
}


const pessoa2 = {
    nome: "Giovana",
    idade: 25,
    profissao: "Advogada"
}


//2b

const funcao = (objeto, objeto2) =>{
    return  "Retorno:\n" + [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length] + "\n" + [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]
}

console.log(funcao(pessoa1, pessoa2))
 */

//2a

/* 
const pessoa1 = {
    nome: "Miguel",
    idade: 27,
    profissao: "Gerente"
}


const pessoa2 = {
    nome: "Giovana",
    idade: 25,
    profissao: "Advogada"
}


//2b

function retornandoDoisValores(a, b) {
    return {
      p1: [a.nome, a.nome.length, a.idade, a.profissao, a.profissao.length],
      p2: [b.nome, b.nome.length, b.idade, b.profissao, b.profissao.length]
    }
  }
  
  console.log(retornandoDoisValores(pessoa1, pessoa2));


//3a
const carrinho = []

//3b
const objeto1 = {
    nome: "Banana",
    disponibilidade: true
}

const objeto2 = {
    nome: "Melancia",
    disponibilidade: true
}

const objeto3 = {
    nome: "Morango",
    disponibilidade: true
}

//3c
const adicionandoCarrinho = (fruta) =>{
    carrinho.push(fruta)
}

adicionandoCarrinho(objeto1)
adicionandoCarrinho(objeto2)
adicionandoCarrinho(objeto3)

//3d
console.log(carrinho)
 */
//-----------------------------------------------------------------------------------
//DESAFIO
//1
/*
const usuario = () =>{
    const usuario = {
        nome: prompt(`Digite seu nome:`),
        idade: Number(prompt(`Digite sua idade:`)),
        profissao: prompt(`Digite sua profissao:`)
    }

    console.log(usuario)
    console.log(typeof usuario)
}

usuario()
 */

//2
/*
const filmeObj1 = {
    anoLancamento: 2001,
    nomeFilme: "O Senhor dos Aneis 1"
}

const filmeObj2 = {
    anoLancamento: 2001,
    nomeFilme: "Tomb Raider"
}

const comparaFilmes = (filme1, filme2) => {
    const primeiroAntesSegundo = filme1.anoLancamento < filme2.anoLancamento
    const primeiroMesmoSegundo = filme1.anoLancamento === filme2.anoLancamento

    return `O primeiro filme foi lancado antes do segundo? ${primeiroAntesSegundo} \nO primeiro filme foi lancado no mesmo ano do segundo? ${primeiroMesmoSegundo}`
}

console.log(comparaFilmes(filmeObj1, filmeObj2))
 */

//3
/* 
const carrinho = []

const objeto1 = {
    nome: "Banana",
    disponibilidade: true
}

const objeto2 = {
    nome: "Melancia",
    disponibilidade: true
}

const objeto3 = {
    nome: "Morango",
    disponibilidade: true
}

const adicionandoCarrinho = (fruta) =>{
    carrinho.push(fruta)
}

adicionandoCarrinho(objeto1)
adicionandoCarrinho(objeto2)
adicionandoCarrinho(objeto3)

console.log(carrinho)

const auxControleEstoque = (fruta) => {
    return {
        ...fruta,
        disponibilidade:!fruta.disponibilidade
    }
}

console.log(auxControleEstoque(objeto1))
console.log(auxControleEstoque(auxControleEstoque(objeto1)))
 */